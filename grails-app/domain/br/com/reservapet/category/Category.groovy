package br.com.reservapet.category

import br.com.reservapet.enumeration.CategoryStatus
import br.com.reservapet.plans.Plan

class Category {

    String name
    String description
    CategoryStatus status
    Date creation

    static hasMany = [plans: Plan]

    static constraints = {
        name nullable: false, maxSize: 255, minSize: 3
        description nullable: false, maxSize: 400
        status nullable: false
        creation nullable: false
    }

    static mapping = {
        id generator: 'sequence-identity', params: [sequence: 'category_id_seq']
    }

}
