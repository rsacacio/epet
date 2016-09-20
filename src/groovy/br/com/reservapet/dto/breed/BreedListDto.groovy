package br.com.reservapet.dto.breed

import br.com.reservapet.dto.category.CategoryResumeDto
import br.com.reservapet.enumeration.BreedStatus

class BreedListDto {

    Long id
    String name
    String description
    BreedStatus status
    CategoryResumeDto category
    Date creation

}
