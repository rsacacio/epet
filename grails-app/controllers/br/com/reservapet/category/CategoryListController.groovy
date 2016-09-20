package br.com.reservapet.category

import br.com.reservapet.dto.category.CategoryListDto

class CategoryListController {

    static responseFormats = ['json']

    def load(){
        List<Category> categories = Category.list(order: 'asc', sort: 'name')

        List<CategoryListDto> dtos = new ArrayList<CategoryListDto>()
        categories.each{ Category category ->
            CategoryListDto dto = new CategoryListDto()
            dto.name = category.name
            dto.description = category.description
            dto.status = category.status
            dto.creation = category.creation
            dtos.add(dto)
        }

        respond categories: dtos
    }

}
