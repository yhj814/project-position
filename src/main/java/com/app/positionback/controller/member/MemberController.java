package com.app.positionback.controller.member;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.file.CorporationFileDTO;
import com.app.positionback.domain.member.MemberDTO;
//import com.app.positionback.service.member.MemberService;
import com.app.positionback.domain.member.MemberVO;
import com.app.positionback.exception.LoginFailException;
import com.app.positionback.repository.file.CorporationFileDAO;
import com.app.positionback.service.corporation.CorporationService;
import com.app.positionback.service.file.CorporationFileService;
import com.app.positionback.service.file.FileService;
import com.app.positionback.service.member.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import java.io.IOException;
import java.util.Optional;

@Controller
// 최상위 경로를 설정하여 컨트롤러를 구분한다.
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final CorporationService corporationService;
    private final HttpSession session;

    @GetMapping("/join/member")
    public void goToJoinForm(MemberDTO memberDTO) {;}

    @PostMapping("/join/member")
    public RedirectView join(MemberDTO memberDTO) {
        memberService.join(memberDTO.toVO());
        return new RedirectView("/login");
    }

    @GetMapping("/join/company")
    public void goToJoinForm(CorporationVO corporationVO) {;}

    @PostMapping("/join/company")
    public RedirectView join(CorporationDTO corporationDTO, String uuid, String path, MultipartFile file) throws IOException {
        memberService.join(corporationDTO.toVO(), uuid, path, file);
        return new RedirectView("/login");
    }

    @GetMapping("/join/check-id")
    @ResponseBody
    public int checkId(String memberEmail){
        return memberService.checkMemberEmail(memberEmail);
    }

    @GetMapping("/join/company/check-id")
    @ResponseBody
    public int checkCorporationId(String corporationEmail){
        return corporationService.checkCorporationEmail(corporationEmail);
    }

    @GetMapping("/join/check-phone")
    @ResponseBody
    public int checkPhone(String memberPhone){
        return memberService.checkMemberPhone(memberPhone);
    }

    @GetMapping("/certification/phone")
    @ResponseBody
    public String certificate(String memberPhone){
        return memberService.sendMessage(memberPhone);
    }

    @GetMapping("/login")
    public String goToLoginForm(MemberDTO memberDTO) {
        return "login/login-combine";
    }

    @PostMapping("/login")
    public RedirectView login(MemberDTO memberDTO){
        if(memberDTO.getLoginType().equals("개인")) {
            Optional<MemberVO> foundMember = memberService.login(memberDTO.toVO());
            MemberVO memberVO = foundMember.orElseThrow(() -> {
                throw new LoginFailException();
            });
            session.setAttribute("member", memberVO);
            return new RedirectView( "/main/body");
        }
        return new RedirectView( "/main/body");
        //기업 회원일때는 corporation/login-corporation-main으로 return
    }

    @GetMapping("logout")
    public RedirectView logout(HttpSession session){
        session.invalidate();
        return new RedirectView("/login/login-combine");
    }

    @GetMapping("/")
    public String goToMain(MemberDTO memberDTO, HttpSession session){
        session.invalidate();
        return "main/body";
    }
}
