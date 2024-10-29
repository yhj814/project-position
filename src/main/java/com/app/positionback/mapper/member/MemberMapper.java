package com.app.positionback.mapper.member;

import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface MemberMapper {
    public int selectCountByMemberEmail(String memberEmail);
    public int selectCountByMemberPhone(String memberPhone);
    public void insert(MemberVO memberVO);
    public Optional<MemberVO> selectByMemberEmailAndMemberPassword(MemberVO memberVO);
}
