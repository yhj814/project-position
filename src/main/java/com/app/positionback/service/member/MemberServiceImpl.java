package com.app.positionback.service.member;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;
import com.app.positionback.repository.corporation.CorporationDAO;
import com.app.positionback.repository.member.MemberDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
// for implement of member
public class MemberServiceImpl implements MemberService {
    private final MemberDAO memberDAO;
    private final CorporationDAO corporationDAO;

    @Override
    public void registerMember(MemberDTO memberDTO) {
        MemberVO memberVO = new MemberVO();
        memberDAO.saveMember(memberDTO.toMemVO());

    }

    @Override
    public Optional<MemberVO> loginAsMember(MemberDTO memberDTO) {
        MemberVO memberVO = memberDTO.toMemVO();
        return memberDAO.findMemberByEmailAndPassword(memberVO);
    }

    @Override
    public Optional<CorporationVO> loginAsCorporation(MemberDTO memberDTO) {
        CorporationVO corporationVO = memberDTO.toCorpVO();
        return corporationDAO.findCorporationByEmailAndPassword(corporationVO);
    }


//    @Override
//    public Optional<MemberVO> loginAsMember(MemberVO memberVO) {
//        return  memberDAO.findMemberByEmailAndPassword(memberVO);
//    }
//
//    @Override
//    public Optional<CorporationVO> loginAsCorporation(CorporationVO corporationVO) {
//        return corporationDAO.findCorporationByEmailAndPassword(corporationVO);
//    }

//    @Override
//    public Optional<MemberVO> login(MemberVO memberVO) {
//        return memberDAO.findMemberByEmailAndPassword(memberVO);
//    }

//    public Optional<MemberVO> login(MemberDTO memberDTO) {
//        if ("MEMBER".equals(memberDTO.getUserType())) {
//            // 일반 회원 로그인 처리
//            MemberVO memberVO = memberDTO.toMemVO();
//            // 로그인 로직, 예: memberRepository.findByEmailAndPassword(memberVO.getEmail(), memberVO.getPassword());
//            return memberDAO.findMemberByEmailAndPassword(memberVO);
//        } else if ("CORP".equals(memberDTO.getUserType())) {
//            // 기업회원 로그인 처리
//            CorporationVO corporationVO = memberDTO.toCorpVO();
//            // 로그인 로직, 예: corporationRepository.findByEmailAndPassword(corporationVO.getEmail(), corporationVO.getPassword());
//            return corporationDAO.findCorporationByEmailAndPassword(corporationVO);
//        }
//
//    }
}
