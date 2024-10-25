package com.app.positionback.repository.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.NoticeFileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.mapper.notice.NoticeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class NoticeDAO {
    private final NoticeMapper noticeMapper;

    public void saveNotice(NoticeDTO noticeDTO) {
        noticeMapper.insertNotice(noticeDTO);
    }

//    public void saveFile(FileDTO fileDTO) {
//        noticeMapper.insertFile(fileDTO);
//    }
//
//    public Long getLastInsertedId() {
//        return noticeMapper.getLastInsertId();
//    }
//
//    public void linkNoticeWithFile(Long noticeId, Long fileId) {
//        NoticeFileDTO noticeFileDTO = new NoticeFileDTO(noticeId, fileId);
//        noticeMapper.insertNoticeFile(noticeFileDTO);
//    }

}
