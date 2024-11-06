package com.app.positionback.controller.complain;

import com.app.positionback.service.complain.ComplainService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class ComplainController {
    private final ComplainService complainService;
    private final HttpSession session;

    @GetMapping("/corporation/complain")
    public String insertComplain() {
        return "/complain/corporation-review-complain";
    }
}
