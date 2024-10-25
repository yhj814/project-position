package com.app.positionback.repository.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.NoticeFileDTO;
import com.app.positionback.mapper.notice.NoticeFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class NoticeFileDAO {
    private final NoticeFileMapper noticeFileMapper;

    public void saveFile(FileDTO fileDTO) {
        noticeFileMapper.insertFile(fileDTO);
    }

    public Long getLastInsertedId() {
        return noticeFileMapper.getLastInsertId();
    }

    public void linkNoticeWithFile(Long noticeId, Long fileId) {
        NoticeFileDTO noticeFileDTO = new NoticeFileDTO(noticeId, fileId);
        noticeFileMapper.insertNoticeFile(noticeFileDTO);
    }

}
