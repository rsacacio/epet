package br.com.reservapet.enumeration

enum CategoryStatus {

    ACTIVE(1), INACTIVE(2), PENDING(3)

    int id

    public CategoryStatus(int id){
        this.id = id
    }

}
