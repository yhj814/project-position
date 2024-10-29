package com.app.positionback.mapper.inquiry;

import com.app.positionback.domain.file.InquiryFileVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InquiryFileMapper {
// 파일 추가
    public void insert(InquiryFileVO inquiryFileVO);
}
