package com.app.positionback.controller.corporation;

import com.app.positionback.service.corporation.CorporationService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/corporation/*")
@RequiredArgsConstructor
@Slf4j
public class CorporationController {
    @GetMapping("corporation-login-main-write-posting")
    public void corporationLoginMainWritePosting(Model model) {
        log.info("Accessing interview review page");
    }
}
