package br.com.reservapet.plan

import br.com.reservapet.breed.Breed
import br.com.reservapet.category.Category
import br.com.reservapet.dto.breed.BreedListDto
import br.com.reservapet.dto.category.CategoryResumeDto
import br.com.reservapet.dto.plan.PlanListDto
import br.com.reservapet.plans.Plan

class PlanListController {

    static responseFormats = ['json']

    def load(){
        List<Plan> plans = Plan.list(order: 'asc', sort: 'name')

        List<PlanListDto> dtos = new ArrayList<>()
        plans.each{ Plan plan ->
            PlanListDto dto = new PlanListDto()
            dto.id = plan.id
            dto.name = plan.name
            dto.description = plan.description
            dto.status = plan.status
            dto.creation = plan.creation
            dto.days = plan.days
            dto.ammount = plan.ammount
            dto.category = new CategoryResumeDto(id: plan.category.id, name: plan.category.name)
            dtos.add(dto)
        }

        respond plans: dtos
    }

}
