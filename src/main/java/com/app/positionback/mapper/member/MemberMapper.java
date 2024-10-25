package com.app.positionback.mapper.member;

import com.app.positionback.domain.member.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface MemberMapper {
    //    회원가입
    public void insertMember(MemberVO memberVO);

    //    로그인
    //Optional<T>는 null이 올 수 있는 값을 감싸는 Wrapper 클래스로, 참조하더라도 NPE가 발생하지 않도록 도와준다.
    public Optional<MemberVO> selectByMemberEmailAndMemberPassword(MemberVO memberVO);

}
