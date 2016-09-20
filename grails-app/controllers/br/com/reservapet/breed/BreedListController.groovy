package br.com.reservapet.breed

import br.com.reservapet.category.Category
import br.com.reservapet.dto.breed.BreedListDto
import br.com.reservapet.dto.category.CategoryListDto
import br.com.reservapet.dto.category.CategoryResumeDto

class BreedListController {

    static responseFormats = ['json']

    def load(){
        List<Breed> breeds = Breed.list(order: 'asc', sort: 'name')

        List<BreedListDto> dtos = new ArrayList<>()
        breeds.each{ Breed breed ->
            BreedListDto dto = new BreedListDto()
            dto.name = breed.name
            dto.description = breed.description
            dto.status = breed.status
            dto.creation = breed.creation
            dto.category = new CategoryResumeDto(id: breed.category.id, name: breed.category.name)
            dtos.add(dto)
        }

        respond breeds: dtos
    }

}
