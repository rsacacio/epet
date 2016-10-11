package br.com.reservapet.book

import br.com.reservapet.enumeration.BookStatus
import br.com.reservapet.enumeration.BookPaymentStatus
import br.com.reservapet.breed.Breed

class Book {

    String owner
    String guest
    Breed breed
    Double weight
    Date creation
    Date checkin
    Date checkout
    String email
    String message
    String phone
//    Double ammount
    BookStatus status
    BookPaymentStatus paymentStatus
    Boolean hasCardHealth
    Boolean hasVaccines
    Boolean acceptFlea

    static constraints = {
        owner nullable: false, maxSize: 255, minSize: 3
        guest nullable: false, maxSize: 255, minSize: 3
        breed nullable: false
        weight nullable: false
        creation nullable: false
        checkin nullable: false
        checkout nullable: false
        email nullable: false
        phone nullable: false
        message nullable: false, maxSize: 400
//        ammount nullable: false
        status nullable: false
        paymentStatus nullable: false
        hasCardHealth nullable: false
        hasVaccines nullable: false
        acceptFlea nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'book_id_seq']
    }

}
