package br.com.reservapet.book

import br.com.reservapet.breed.Breed
import br.com.reservapet.command.book.BookingCommand
import br.com.reservapet.dto.breed.BreedResumeDto
import br.com.reservapet.dto.plan.PlanResumeDto
import br.com.reservapet.enumeration.BookPaymentStatus
import br.com.reservapet.enumeration.BookStatus
import br.com.reservapet.plans.Plan

class BookingController {

    static responseFormats = ['json']

    def save(BookingCommand command){
        Book book = new Book()
        book.status = BookStatus.BOOKING
        book.paymentStatus = BookPaymentStatus.PAID
        book.breed = Breed.get(command.breedId)
        book.weight = command.weight

        book.checkin = command.checkin
        book.checkout = command.checkout

        int days = 0
        use(groovy.time.TimeCategory) {
            def duration = book.checkin - book.checkout
            days = duration.days
        }

        book.ammount = days * Plan.findByCategoryAndDays(book.breed.category, days).ammount
        book.email = command.email
        book.message = command.message
        book.save(flush: true)

        respond success: true
    }

    def loadBreeds(){
        List<Breed> breeds = Breed.list(order: 'asc', sort: 'name')

        List<BreedResumeDto> dtos = new ArrayList<Breed>()
        breeds.each { Breed breed ->
            BreedResumeDto dto = new BreedResumeDto()
            dto.name = breed.name
            dto.id = breed.id
            dtos.add(dto)
        }

        respond breeds: dtos
    }

    def getPlan(){
        Breed breed = Breed.get(params.breedId as Long)
        breed.category.plans.each{Plan plan ->
            if(plan.days == params.days as int){
                respond plan : new PlanResumeDto(id: plan.id, name: plan.name, ammount: plan.ammount)
            }
        }
        respond plan: {}
    }

}
