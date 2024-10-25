package com.app.positionback.mapper.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.NoticeFileDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeFileMapper {
    // 파일 등록
    public void insertFile(FileDTO fileDTO);

    // 마지막으로 삽입된 ID 가져오기
    public Long getLastInsertId();

    // 공고와 파일 연결
    public void insertNoticeFile(NoticeFileDTO noticeFileDTO);
}
