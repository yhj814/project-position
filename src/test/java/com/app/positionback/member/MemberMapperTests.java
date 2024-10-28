package com.app.positionback.member;

import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;
import com.app.positionback.mapper.member.MemberMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Slf4j
public class MemberMapperTests {

    @Autowired
    private MemberMapper memberMapper;

    @Test
    public void insertTest() {
        MemberDTO memberDTO = new MemberDTO();

        memberDTO.setMemberName("test");
        memberDTO.setMemberEmail("test@test.com");
        memberDTO.setMemberPassword("123456");
        memberDTO.setMemberAddress("서울시 강남구 테헤란로 32");
        memberDTO.setMemberAddressDetail("주류성빌딩 7층");
        memberDTO.setMemberNickname("취뽀지션");

        memberMapper.insertMember(memberDTO.toMemVO());
        log.info("memberDTO : {}", memberDTO);
    }

    @Test
    public void selectByMemberEmailAndMemberPasswordTest() {
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setMemberEmail("test@test.com");
        memberDTO.setMemberPassword("123456");

        Optional<MemberVO> foundMember =
                memberMapper.selectByMemberEmailAndMemberPassword(memberDTO.toMemVO());

//        테이블에서 조회된 회원 정보가 null이 아니라면, 전체 정보 출력
        foundMember.map(MemberVO::toString).ifPresent(log::info);
    }
}
