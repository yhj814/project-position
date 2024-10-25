package com.app.positionback.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.NoticeFileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.domain.notice.NoticeVO;
import com.app.positionback.mapper.notice.NoticeMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class NoticeMapperTests {
    @Autowired
    private NoticeMapper noticeMapper;

    @Test
    public void testInsert() {
        // 공고 등록을 위한 NoticeVO 생성
        NoticeDTO noticeDTO = new NoticeDTO();
        noticeDTO.setCorporationId(1L); // 예시 corporation_id
        noticeDTO.setNoticeTitle("신규 채용 공고");
        noticeDTO.setNoticeCareer("경력 3년 이상");
        noticeDTO.setNoticeEducation("대졸 이상");
        noticeDTO.setNoticeWorkDate("2024-01-01");
        noticeDTO.setNoticeEndDate("2024-01-31");
        noticeDTO.setJobCategorycId(1L);

        // 공고 등록
        noticeMapper.insertNotice(noticeDTO);
        log.info("Inserted notice: {}", noticeDTO);

        // 마지막으로 삽입된 ID 가져오기
//        Long lastInsertId = noticeMapper.getLastInsertId();
//
//        // 파일 등록을 위한 FileVO 생성
//        FileDTO fileDTO = new FileDTO();
//        fileDTO.setFileName("job_posting.pdf");
//        fileDTO.setFilePath("/uploads/job_posting.pdf");
//
//        // 파일 등록
//        noticeMapper.insertFile(fileDTO);
//        log.info("Inserted file: {}", fileDTO);
//
//        // 다시 마지막으로 삽입된 ID 가져오기
//        Long lastFileId = noticeMapper.getLastInsertId();
//
//        // 공고와 파일 연결
//        NoticeFileDTO noticeFileDTO = new NoticeFileDTO();
//        noticeFileDTO.setNoticeId(lastInsertId);
//        noticeFileDTO.setFileId(lastFileId);
//
//        // 연결 정보 삽입
//        noticeMapper.insertNoticeFile(noticeFileDTO);
//        log.info("Inserted notice-file connection: {}", noticeFileDTO);
    }

}
