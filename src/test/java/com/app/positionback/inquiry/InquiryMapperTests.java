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
        inquiryDTO.setInquiryCategory("종류1");
        inquiryDTO.setInquiryTitle("포지션 문의합니다");
        inquiryDTO.setInquiryContent("포지션 지원은 어떻게하나요?");
        inquiryDTO.setMemberId(1l);
        inquiryMapper.insert(inquiryDTO.toVO());
    }
}