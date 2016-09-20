package br.com.reservapet.user

import br.com.reservapet.enumeration.UserStatus
import br.com.reservapet.enumeration.UserType

class ReservapetUser {

    String name
    String email
    String password
    Date creation
    UserStatus status
    UserType type

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        password nullable: false, maxSize: 255
        email nullable: false, maxSize: 400
        creation nullable: false, maxSize: 30
        status nullable: false
        type nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'user_id_seq']
    }


}
