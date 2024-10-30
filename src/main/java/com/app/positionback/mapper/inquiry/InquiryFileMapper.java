package com.app.positionback.mapper.inquiry;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.FileVO;
import com.app.positionback.domain.file.InquiryFileVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InquiryFileMapper {
    // 파일 추가
    public void insertInquiryAddFile(FileDTO FileDTO);

    // 가장 최근 추가된 ID 가져오기
    public Long getRecentInsertId();

    // 문의와 파일 연결
    public void insertInquiryFile(Long inquiryId, Long fileId);
}
