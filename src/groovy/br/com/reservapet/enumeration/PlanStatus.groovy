package br.com.reservapet.enumeration

enum PlanStatus {

    ACTIVE(1), INACTIVE(2), PENDING(3)

    int id

    public PlanStatus(int id){
        this.id = id
    }

}
