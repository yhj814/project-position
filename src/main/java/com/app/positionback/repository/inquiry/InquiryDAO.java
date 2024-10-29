package com.app.positionback.repository.inquiry;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.inquiry.InquiryVO;
import com.app.positionback.domain.member.MemberVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InquiryDAO {
    void insertForCorporation(CorporationVO corpVO); // 기업 회원용 삽입 메서드
    void insertForMember(MemberVO memberVO); // 일반 회원용 삽입 메서드

    void insert(InquiryVO inquiryVO);
}

