package br.com.reservapet.partner

import br.com.reservapet.breed.Breed
import br.com.reservapet.dto.breed.BreedListDto
import br.com.reservapet.dto.category.CategoryResumeDto
import br.com.reservapet.dto.partner.PartnerListDto
import br.com.reservapet.enumeration.UserType
import br.com.reservapet.user.ReservapetUser

class PartnerListController {

    static responseFormats = ['json']

    def load(){
        List<ReservapetUser> partners = ReservapetUser.findAllByType(UserType.PARTNER, [sort: 'name', order: 'desc'])

        List<PartnerListDto> dtos = new ArrayList<>()
        partners.each{ ReservapetUser domain ->
            PartnerListDto dto = new PartnerListDto()
            dto.id = domain.id
            dto.name = domain.name
            dto.email = domain.email
            dto.status = domain.status
            dto.creation = domain.creation
            dto.phone = domain.phone
            dto.creation = domain.creation
            dtos.add(dto)
        }

        respond partners: dtos
    }

}
