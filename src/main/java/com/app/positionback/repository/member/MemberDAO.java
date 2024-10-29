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

    public int findCountByMemberEmail(String memberEmail) {
        return memberMapper.selectCountByMemberEmail(memberEmail);
    }

    public int findCountByMemberPhone(String memberPhone) {
        return memberMapper.selectCountByMemberPhone(memberPhone);
    }

    public void save(MemberVO memberVO) {
        memberMapper.insert(memberVO);
    }

    public Optional<MemberVO> findByMemberEmailAndMemberPassword(MemberVO memberVO) {
        return memberMapper.selectByMemberEmailAndMemberPassword(memberVO);
    }
}
