package br.com.reservapet.enumeration

enum BreedStatus {

    ACTIVE(1), INACTIVE(2), PENDING(3)

    int id

    public BreedStatus(int id){
        this.id = id
    }

}
