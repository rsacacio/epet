package br.com.reservapet.enumeration

enum UserType {

    ADMIN(1), PARTNER(2)

    int id

    public UserType(int id){
        this.id = id
    }

}
