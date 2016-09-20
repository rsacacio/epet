package br.com.reservapet.dto.plan

import br.com.reservapet.dto.category.CategoryResumeDto
import br.com.reservapet.enumeration.BreedStatus
import br.com.reservapet.enumeration.PlanStatus

class PlanListDto {

    Long id
    String name
    String description
    int days
    Double ammount
    PlanStatus status
    CategoryResumeDto category
    Date creation

}
