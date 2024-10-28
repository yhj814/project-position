package com.app.positionback.service.member;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;

import java.util.Optional;

// 회원관련 서비스
public interface MemberService {
//    일반 회원가입
    public void registerMember(MemberDTO memberDTO);
//    일반 로그인
//    public Optional<MemberVO> login(MemberVO memberVO);
//    public Optional<MemberVO> loginAsMember(MemberVO memberVO);
//   public Optional<CorporationVO> loginAsCorporation(CorporationVO corporationVO);

    public  Optional<MemberVO> loginAsMember(MemberDTO memberDTO);

    public  Optional<CorporationVO> loginAsCorporation(MemberDTO memberDTO);
//Optional<MemberVO> login(MemberDTO memberDTO);
}
