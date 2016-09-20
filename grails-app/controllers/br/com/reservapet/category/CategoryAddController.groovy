package br.com.reservapet.category

import br.com.reservapet.command.category.CategoryAddCommand
import br.com.reservapet.enumeration.CategoryStatus

class CategoryAddController {

    static responseFormats = ['json']

    def save(CategoryAddCommand command) {
        Category category = new Category()
        category.creation = new Date()
        category.status = CategoryStatus.ACTIVE
        category.name = command.name
        category.description = command.description
        category.save()

        respond success: true
    }
}
