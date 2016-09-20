package br.com.reservapet.enumeration

enum UserType {

    ADMIN(1), AUXILIAR(2)

    int id

    public UserType(int id){
        this.id = id
    }

}
