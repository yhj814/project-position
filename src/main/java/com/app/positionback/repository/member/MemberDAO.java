package com.app.positionback.repository.member;

import com.app.positionback.domain.member.MemberVO;
import com.app.positionback.mapper.member.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberDAO {

    private final MemberMapper memberMapper;

    //    회원가입
    public void saveMember(MemberVO memberVO) {
        memberMapper.insertMember(memberVO);
    }

    //    로그인
    public Optional<MemberVO> findMemberByEmailAndPassword(MemberVO memberVO) {
        return memberMapper.selectByMemberEmailAndMemberPassword(memberVO);
    }
}
