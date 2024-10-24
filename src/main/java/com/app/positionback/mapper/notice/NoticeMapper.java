package com.app.positionback.mapper.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.FileVO;
import com.app.positionback.domain.file.NoticeFileDTO;
import com.app.positionback.domain.file.NoticeFileVO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.domain.notice.NoticeVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeMapper {
    // 공고등록
    public void insertNotice(NoticeDTO noticeDTO);

    // 파일 등록
    public void insertFile(FileDTO fileDTO);

    // 마지막으로 삽입된 ID 가져오기
    public Long getLastInsertId();

    // 공고와 파일 연결
    public void insertNoticeFile(NoticeFileDTO noticeFileDTO);



    // 공고 삭제

//    공고 목록
//    공고 상세보기
}
