package br.com.reservapet.plans

import br.com.reservapet.enumeration.PlanStatus
import br.com.reservapet.category.Category

class Plan {

    String name
    String description
    int days
    PlanStatus status
    Date creation
    Double ammount

    static belongsTo = [category: Category]

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        description nullable: false, maxSize: 400
        days nullable: false
        status nullable: false
        creation nullable: false
        ammount nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'plan_id_seq']
    }

}
