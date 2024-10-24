package com.app.positionback.repository.inquiry;

import com.app.positionback.domain.inquiry.InquiryVO;
import com.app.positionback.mapper.inquiry.InquiryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class InquiryDAO {
    private final InquiryMapper inquiryMapper;

    // 1:1 문의 작성
    public void insert(InquiryVO inquiryVO) {
        inquiryMapper.insert(inquiryVO);
    }

}
