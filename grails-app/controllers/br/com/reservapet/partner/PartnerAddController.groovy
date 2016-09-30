package br.com.reservapet.partner

import br.com.reservapet.breed.Breed
import br.com.reservapet.category.Category
import br.com.reservapet.command.breed.BreedAddCommand
import br.com.reservapet.command.partner.PartnerAddCommand
import br.com.reservapet.dto.category.CategoryResumeDto
import br.com.reservapet.enumeration.BreedStatus
import br.com.reservapet.enumeration.UserStatus
import br.com.reservapet.enumeration.UserType
import br.com.reservapet.user.ReservapetUser

class PartnerAddController {

    static responseFormats = ['json']

    def save(PartnerAddCommand command) {
        ReservapetUser user = new ReservapetUser()
        user.creation = new Date()
        user.status = UserStatus.ACTIVE
        user.name = command.name
        user.email = command.email
        user.type = UserType.PARTNER
        user.password = generatePassword().encodeAsSHA256()
        user.save()

        respond success: true
    }

    private String generatePassword(){
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 18) {
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;
    }
}
