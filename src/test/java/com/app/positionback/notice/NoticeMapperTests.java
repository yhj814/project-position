package com.app.positionback.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.NoticeFileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.domain.notice.NoticeVO;
import com.app.positionback.mapper.notice.NoticeFileMapper;
import com.app.positionback.mapper.notice.NoticeMapper;
import com.app.positionback.utill.Pagination;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Slf4j
public class NoticeMapperTests {
    @Autowired
    private NoticeMapper noticeMapper;
    @Autowired
    private NoticeFileMapper noticeFileMapper;

    // 공고 등록 테스트
    @Test
    public void testInsertNotice() {
        NoticeDTO noticeDTO = new NoticeDTO();
        noticeDTO.setCorporationId(1L);
        noticeDTO.setNoticeTitle("Software Engineer");
        noticeDTO.setNoticeCareer("3 years");
        noticeDTO.setNoticeEducation("Bachelor's Degree");
        noticeDTO.setNoticeEndDate("2024-01-31");
        noticeDTO.setNoticeWorkStartTime("09:00");
        noticeDTO.setNoticeWorkEndTime("18:00");
        noticeDTO.setNoticeWorkStartDate("2024-01-31");
        noticeDTO.setNoticeWorkEndDate("2024-01-31");

        noticeMapper.insertNotice(noticeDTO);
        log.info("Inserted notice with ID: {}", noticeMapper.getLastInsertId());
    }

    // 공고 수정 테스트
    @Test
    public void testUpdateNotice() {
        NoticeDTO noticeDTO = new NoticeDTO();
        noticeDTO.setId(11L);
        noticeDTO.setCorporationId(1L);
        noticeDTO.setNoticeTitle("Updated Title");
        noticeDTO.setNoticeCareer("5 years");
        noticeDTO.setNoticeEducation("Master's Degree");
        noticeDTO.setNoticeEndDate("2024-01-31");
        noticeDTO.setNoticeWorkStartTime("08:00");
        noticeDTO.setNoticeWorkEndTime("17:00");
        noticeDTO.setNoticeWorkStartDate("2024-01-31");
        noticeDTO.setNoticeWorkEndDate("2024-01-31");
        noticeDTO.setUpdatedDate("2024-01-31");

        noticeMapper.updateNotice(noticeDTO);
        log.info("Notice updated: {}", noticeMapper.selectNoticeById(1L));
    }


    // 공고 삭제 테스트
    @Test
    public void testDeleteNotice() {
        Long id = 1L; // 삭제할 공고 ID
        noticeFileMapper.deleteFilesByNoticeId(id);
        noticeMapper.deleteNotice(id);
        log.info("Deleted notice with ID: {}", id);
    }

    // 공고 상세 조회 테스트
    @Test
    public void testSelectNoticeById() {
        Long id = 1L; // 조회할 공고 ID
        log.info("Notice: {}", noticeMapper.selectNoticeById(id));
    }

    // 기업이 작성한 공고 목록 조회 테스트
    @Test
    public void testSelectNoticesByCorporationId() {
//        Long corporationId = 1L; // 테스트용 corporationId
//        Pagination pagination = new Pagination();
//
//        // Pagination 설정
//        pagination.setPage(2);  // 1페이지 조회
//
//        pagination.setTotal(noticeMapper.selectCount(corporationId));
//        pagination.progress();
//
//        log.info("Start Row: {}, Row Count: {}", pagination.getStartRow(), pagination.getRowCount());
//
//        // 공고 목록 조회
//        List<NoticeDTO> notices = noticeMapper.selectNoticesByCorporationId(pagination,corporationId);
//
//        // 조회 결과 출력
//        if (notices.isEmpty()) {
//            log.info("No notices found for corporationId: {}", corporationId);
//        } else {
//            notices.forEach(notice -> log.info("Notice: {}", notice));
//        }
    }
//        Long corporationId = 1L; // 조회할 기업 ID
//        List<NoticeDTO> notices = noticeMapper.selectNoticesByCorporationId(corporationId);
//        log.info("Notices for Corporation {}: {}", corporationId, notices);
}


