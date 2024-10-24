package com.app.positionback.controller.interview;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/interview-review/*")
@RequiredArgsConstructor
@Slf4j
public class InterviewController {
    @GetMapping("interview-review")
    public void review(Model model) {
        log.info("Accessing interview review page");
        model.addAttribute("message", "This is the interview review page.");
    }
}
