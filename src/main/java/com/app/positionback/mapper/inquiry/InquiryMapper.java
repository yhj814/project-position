package com.app.positionback.mapper.inquiry;

import com.app.positionback.domain.inquiry.InquiryVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InquiryMapper {

    // 1:1 문의 작성
    public void insert(InquiryVO inquiryVO);
}
