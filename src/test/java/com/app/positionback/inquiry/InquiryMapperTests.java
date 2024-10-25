package com.app.positionback.inquiry;

import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.mapper.inquiry.InquiryMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class InquiryMapperTests {
    @Autowired
    private InquiryMapper inquiryMapper;

    @Test
    public void testInquiryInsert() {
        InquiryDTO inquiryDTO = new InquiryDTO();
        inquiryDTO.setInquiryType("개인");
        inquiryDTO.setInquiryCategory("이력서 문의");
        inquiryDTO.setInquiryTitle("이력서 관련 문의합니다");
        inquiryDTO.setInquiryContent("이력서는 어떻게 작성하나요?");
        inquiryDTO.setMemberId(1l);
        inquiryMapper.insert(inquiryDTO.toVO());
    }
}

//private String inquiryType;
//private String inquiryCategory;
//private String inquiryTitle;
//private String inquiryContent;
//private String createDate;
//private String updateDate;
//private Long memberId;
