package com.app.positionback.repository.complain;

import com.app.positionback.domain.complain.ComplainVO;
import com.app.positionback.mapper.complain.ComplainMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ComplainDAO {
    private final ComplainMapper complainMapper;

    // 신고 등록
    public void saveComplain(ComplainVO complainVO) {
        complainMapper.insertComplain(complainVO);
    }

    // 신고 상태 업데이트
    public void updateComplainStatus(ComplainVO complainVO) {
        complainMapper.updateComplainStatus(complainVO);
    }
}
