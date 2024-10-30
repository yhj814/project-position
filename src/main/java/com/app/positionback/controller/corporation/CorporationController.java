package com.app.positionback.controller.corporation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CorporationController {
    @GetMapping("/corporation")
    public String goToMain(){
        return "corporation/corporation-login-main";
    }
}
