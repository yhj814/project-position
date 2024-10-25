package com.app.positionback.service.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface NoticeService {
    // 공고 저장
    void saveNotice(NoticeDTO noticeDTO, MultipartFile file)  throws IOException;

}
