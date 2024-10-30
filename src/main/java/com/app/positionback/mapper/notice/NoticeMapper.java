package com.app.positionback.mapper.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.FileVO;
import com.app.positionback.domain.file.NoticeFileDTO;
import com.app.positionback.domain.file.NoticeFileVO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.domain.notice.NoticeVO;
import com.app.positionback.utill.Pagination;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface NoticeMapper {
    // 공고등록
    public void insertNotice(NoticeDTO noticeDTO);

    // 마지막으로 삽입된 ID 가져오기
    public Long getLastInsertId();

    // 공고 수정
    public void updateNotice(NoticeDTO noticeDTO);

    // 공고 삭제
    public void deleteNotice(Long id);

    // 공고 상세조회
    public NoticeDTO selectNoticeById(Long id);

    // 기업이 작성한 공고 목록
    public List<NoticeDTO> selectNoticesByCorporationId(@Param("pagination") Pagination pagination,@Param("corporationId") Long corporationId);

    // 기업이 작성한 공고 목록 전체 개수
    public int selectCount(@Param("pagination") Pagination pagination, Long corporationId);

}
