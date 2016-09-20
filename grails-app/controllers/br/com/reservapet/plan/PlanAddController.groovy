package br.com.reservapet.plan

import br.com.reservapet.breed.Breed
import br.com.reservapet.category.Category
import br.com.reservapet.command.breed.BreedAddCommand
import br.com.reservapet.command.plan.PlanAddCommand
import br.com.reservapet.dto.category.CategoryResumeDto
import br.com.reservapet.enumeration.BreedStatus
import br.com.reservapet.enumeration.PlanStatus
import br.com.reservapet.plans.Plan

class PlanAddController {

    static responseFormats = ['json']

    def save(PlanAddCommand command) {
        Plan plan = new Plan()
        plan.creation = new Date()
        plan.status = PlanStatus.ACTIVE
        plan.name = command.name
        plan.description = command.description
        plan.ammount = command.ammount
        plan.days = command.days
        plan.category = Category.get(command.categoryId)
        plan.save(flush: true)


        respond success: true
    }

    def loadCategories(){
        List<Category> categories = Category.list(order:' asc', sort: 'name')
        List<CategoryResumeDto> dtos = new ArrayList<CategoryResumeDto>()

        categories.each{ Category category ->
            CategoryResumeDto dto = new CategoryResumeDto()
            dto.id = category.id
            dto.name = category.name
            dtos.add(dto)
        }

        respond categories: dtos
    }
}
