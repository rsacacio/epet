package br.com.reservapet.helper

import br.com.reservapet.user.ReservapetUser
import grails.plugin.springsecurity.SpringSecurityService
import grails.util.Holders

public final class UserHelper {

    private UserHelper() {
    }

    public static ReservapetUser getUser() {
        SpringSecurityService springSecurityService = (SpringSecurityService) Holders.grailsApplication.mainContext.getBean("springSecurityService")
        ReservapetUser netUser = ReservapetUser.findByEmail(springSecurityService.principal.username)
        netUser
    }
}
