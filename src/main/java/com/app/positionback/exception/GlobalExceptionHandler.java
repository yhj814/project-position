package com.app.positionback.exception;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.view.RedirectView;


@ControllerAdvice(basePackages = "com.app.positionback.controller.member")
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(LoginFailException.class)
    protected RedirectView handleLoginFailException(LoginFailException e , HttpServletRequest request) {
        String currentPath = request.getRequestURI();
        log.error(e.getMessage());
        return new RedirectView(currentPath + "?status=false");
    }
}
