package com.app.positionback.mapper.inquiry;

import com.app.positionback.domain.inquiry.InquiryVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InquiryMapper {
    public void insert(InquiryVO inquiryVO);
}
