package com.app.positionback.exception;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//  요청 경로가 잘못되었을 때 이동하고 싶은 경로를 작성한다.
//  만약 이 파일을 만들지 않는다면 /error/404.html이 기본 응답 경로이다.
@Controller
public class NotFoundError implements ErrorController {
    @GetMapping("/error")
    public String handleError() {
//        return new RedirectView("/member/login");
        return "/404/404";
    }
}
