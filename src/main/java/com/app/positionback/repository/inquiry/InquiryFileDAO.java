package com.app.positionback.repository.inquiry;

import com.app.positionback.domain.file.FileVO;
import com.app.positionback.mapper.inquiry.InquiryFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class InquiryFileDAO {
    private final InquiryFileMapper inquiryFileMapper;

    // 문의 파일 저장
    public void saveInquiryFile(FileVO fileVO) {
        inquiryFileMapper.insertInquiryAddFile(fileVO);
    }

    // 가장 최근 추가된 ID 가져오기
    public Long getRecentInsertedId() {
        return inquiryFileMapper.getRecentInsertId();
    }

    // 문의와 파일 연결
    public void linkInquiryWithFile(Long inquiryId, Long fileId) {
        inquiryFileMapper.insertInquiryFile(inquiryId, fileId);
    }
}
