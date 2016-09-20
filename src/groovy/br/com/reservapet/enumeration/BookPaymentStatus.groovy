package br.com.reservapet.enumeration

enum BookPaymentStatus {

    PENDING(1), PAID(2), REVERSED(3)

    int id

    public BookPaymentStatus(int id){
        this.id = id
    }

}
