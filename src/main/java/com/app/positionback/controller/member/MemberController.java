package com.app.positionback.controller.member;

import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.service.member.MemberService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import java.time.LocalTime;
import java.util.Optional;

@Controller
// 최상위 경로를 설정하여 컨트롤러를 구분한다.
//@RequestMapping("/member/*")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/login/login-combine")
    //    @RequestParam(required = false)
//    전달받은 데이터가 null일 경우 required의 default값이 true이기 때문에,
//    NPE가 발생할 수 있다. 이를 필수가 아닌 선택으로(null 허용) 변경하고 싶다면,
//    required 설정을 false로 지정한다.
    public void goToLoginForm(@RequestParam(required = false) Boolean status, MemberDTO memberDTO, HttpServletRequest request, Model model) {
        log.info("status: {}", status);

        //        쿠키 조회
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (int i = 0; i < cookies.length; i++) {
                log.info(cookies[i].getName());
                //            save라는 key가 있다면,
                if (cookies[i].getName().equals("save")) {
                    //                해당 value를 화면으로 보낸다.
                    model.addAttribute("save", cookies[i].getValue());

                }
                if (cookies[i].getName().equals("memberEmail")) {
                    memberDTO.setMemberEmail(cookies[i].getValue());
                }

            }
        }

    }
    //    @GetMapping("/login/login-combine")
//    public String goToLoginForm(MemberDTO memberDTO){
//        return "login/login-combine";
//    }
//
    @PostMapping("/login/login-combine")
    public RedirectView login(@RequestParam(required = false) Boolean status,MemberDTO memberDTO){

        return new RedirectView( "/main/body");
    }
//    @GetMapping("/main/body")
//    public String goToMainPage(MemberDTO memberDTO){
//        return "/main/body";
//    }
}
