package com.app.positionback.repository.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.NoticeFileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.mapper.notice.NoticeMapper;
import com.app.positionback.utill.Pagination;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class NoticeDAO {
    private final NoticeMapper noticeMapper;

    // 새로운 공고 저장
    public void saveNotice(NoticeDTO noticeDTO) {
        noticeMapper.insertNotice(noticeDTO);
    }

    // 마지막으로 삽입된 공고 ID 가져오기
    public Long getLastInsertedId() {
        return noticeMapper.getLastInsertId();
    }

    // 기존 공고 수정
    public void updateNotice(NoticeDTO noticeDTO) {
        noticeMapper.updateNotice(noticeDTO);
    }

    // 공고 ID로 삭제
    public void deleteNotice(Long id) {
        noticeMapper.deleteNotice(id);
    }

    // 공고 ID로 조회
    public NoticeDTO findNoticeById(Long id) {
        return noticeMapper.selectNoticeById(id);
    }

    // 기업별 공고 목록 조회
    public List<NoticeDTO> findNoticesByCorporationId(Pagination pagination,Long corporationId) {
        return noticeMapper.selectNoticesByCorporationId(pagination,corporationId);
    }

    public int getTotal(Pagination pagination,Long corporationId) {
        return noticeMapper.selectCount(pagination,corporationId);
    }


}
