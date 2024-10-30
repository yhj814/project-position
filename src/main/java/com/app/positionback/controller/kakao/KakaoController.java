package com.app.positionback.controller.kakao;

import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;
import com.app.positionback.exception.LoginFailException;
import com.app.positionback.service.kakao.KakaoService;
import com.app.positionback.service.member.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Optional;

@Controller
@Slf4j
@RequiredArgsConstructor
public class KakaoController {
    private final KakaoService kakaoService;
    private final MemberService memberService;

    @GetMapping("/kakao/login")
    public RedirectView login(String code, HttpSession session, RedirectAttributes redirectAttributes){
        String token = kakaoService.getKakaoAccessToken(code);
        Optional<MemberDTO> kakaoInfo = kakaoService.getKakaoInfo(token);

//        카카오 로그인 성공
        MemberDTO kakaoMember = kakaoInfo.orElseThrow(() -> {
//            카카오 로그인 실패
            throw new LoginFailException();
        });

//        로그인한 카카오 이메일을 DB에서 조회
        Optional<MemberVO> foundMember = memberService.getKakaoMember(kakaoMember.getMemberKakaoEmail());
//        카카오 이메일이 DB에 이미 존재하고 회원가입까지 완료된 회원이라면(여러 정보 중 이름만 검사함, 다른 이유 없음),
        if(foundMember.isPresent()){
            if(foundMember.get().getMemberName() != null){
//            전체 정보 session에 저장
                session.setAttribute("member", foundMember.get());
//            메인 페이지로 이동
                return new RedirectView("/");

            }else{
//                이미 DB에 존재하지만, 회원가입을 미완료했다면,
//                저장되었던 회원의 id를 전달해줌
                return new RedirectView("/join/member?memberLoginType=kakao&id=" + foundMember.get().getId());
            }
        }
//        카카오 이메일이 DB에 없다면,
//        DB에 카카오 정보 새롭게 저장
        memberService.registerKakaoMember(kakaoMember.toVO());
//        나머지 정보 입력을 위해 회원가입 페이지로 이동
//        방금 DB에 추가된 id를 전달해줌
        return new RedirectView("/join/member?memberLoginType=kakao&id=" + memberService.getLastInsertId());
    }
}
