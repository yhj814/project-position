package com.app.positionback.service.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface NoticeService {
    // 공고 저장
    public void saveNotice(NoticeDTO noticeDTO, MultipartFile file)  throws IOException;

    // 공고 수정
    public void updateNotice(NoticeDTO noticeDTO, MultipartFile file) throws IOException;

    // 공고 삭제
    public void deleteNotice(Long id);

    // 공고 상세 조회
    public NoticeDTO getNoticeById(Long id);

    // 기업별 공고 목록 조회
    public List<NoticeDTO> getNoticesByCorporationId(Long corporationId);
}
