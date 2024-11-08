package com.app.positionback.apply;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.mapper.apply.ApplyMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class ApplyMapperTests {
    @Autowired
    private ApplyMapper applyMapper;

    @Test
    public void testSelectApplyById() {
        // 테스트할 applyId 설정 (존재하는 ID로 설정)
        Long applyId = 1L;

        // selectApplyById 메서드 호출
        ApplyDTO applyDTO = applyMapper.selectApplyById(applyId);

        // 결과 확인
        log.info("ApplyDTO: {}", applyDTO);
    }
}
