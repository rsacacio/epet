package br.com.reservapet.breed

import br.com.reservapet.category.Category
import br.com.reservapet.command.breed.BreedAddCommand
import br.com.reservapet.command.category.CategoryAddCommand
import br.com.reservapet.dto.category.CategoryResumeDto
import br.com.reservapet.enumeration.BreedStatus
import br.com.reservapet.enumeration.CategoryStatus

class BreedAddController {

    static responseFormats = ['json']

    def save(BreedAddCommand command) {
        Breed breed = new Breed()
        breed.creation = new Date()
        breed.status = BreedStatus.ACTIVE
        breed.name = command.name
        breed.description = command.description
        breed.category = Category.get(command.category)
        breed.save()


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
