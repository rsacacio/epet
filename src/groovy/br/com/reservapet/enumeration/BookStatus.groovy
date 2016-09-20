package br.com.reservapet.enumeration

enum BookStatus {

    BOOKING(1), HOSTED(2), FINALIZED(3)

    int id

    public BookStatus(int id){
        this.id = id
    }

}
