package br.com.reservapet.breed

import br.com.reservapet.enumeration.BreedStatus
import br.com.reservapet.category.Category

class Breed {

    String name
    String description
    Category category
    BreedStatus status
    Date creation

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        description nullable: false, maxSize: 400
        category nullable: false
        status nullable: false
        creation nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'breed_id_seq']
    }

}
