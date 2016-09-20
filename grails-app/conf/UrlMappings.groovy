class UrlMappings {

	static mappings = {
        "/api/$controller/$action?/$id?(.$format)?" {
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "/api/public/booking/$action?"(controller: "booking")
        "500"(view:'/error')
	}
}
