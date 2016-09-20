package br.com.reservapet.dto.category

import br.com.reservapet.enumeration.CategoryStatus

class CategoryListDto {

    Long id
    String name
    String description
    CategoryStatus status
    Date creation

}
