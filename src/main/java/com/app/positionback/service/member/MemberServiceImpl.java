package com.app.positionback.service.member;

import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;
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
public class MemberServiceImpl implements MemberService {
    private final MemberDAO memberDAO;
    @Override
    public void registerMember(MemberDTO memberDTO) {
        MemberVO memberVO = new MemberVO();
        memberDAO.saveMember(memberDTO.toVO());
    }

    @Override
    public Optional<MemberVO> login(MemberVO memberVO) {
        return memberDAO.findMemberByEmailAndPassword(memberVO);
    }
}
