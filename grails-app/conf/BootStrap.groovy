import br.com.reservapet.enumeration.UserStatus
import br.com.reservapet.enumeration.UserType
import br.com.reservapet.user.ReservapetUser

class BootStrap {

    def init = { servletContext ->

        ReservapetUser user = new ReservapetUser()
        user.name = "Rangel Acácio de Souza"
        user.email = "rs.acacio@gmail.com"
        user.creation = new Date()
        user.password = "teste".encodeAsSHA256()
        user.status = UserStatus.ACTIVE
        user.type = UserType.ADMIN
        user.save(flush: true)

    }
    def destroy = {
    }
}
