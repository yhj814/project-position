package com.app.positionback.complain;

import com.app.positionback.domain.complain.ComplainDTO;
import com.app.positionback.domain.complain.ComplainVO;
import com.app.positionback.mapper.complain.ComplainMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class ComplainMapperTests {
    @Autowired
    private ComplainMapper complainMapper;

    @Test
    public void insertTest() {
        // 테스트 데이터 준비
        ComplainDTO complainDTO = new ComplainDTO();
        complainDTO.setComplainTitle("Test Complaint Title");
        complainDTO.setComplainContent("Test Complaint Content");
        complainDTO.setComplainStatus("Pending");
        complainDTO.setCorporationId(1L); // 예시로 1번 기업 ID 사용
        complainDTO.setMemberId(1L); // 예시로 1번 회원 ID 사용

        // 신고 등록
        complainMapper.insertComplain(complainDTO.toVO());

        // 결과 확인 로그
        log.info("Complaint inserted with ID: " + complainDTO.getId());
    }

}
