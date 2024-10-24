package com.app.positionback.service.member;

import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;

import java.util.Optional;

public interface MemberService {
//    일반 회원가입
    public void registerMember(MemberDTO memberDTO);
//    일반 로그인
    public Optional<MemberVO> login(MemberVO memberVO);
}
