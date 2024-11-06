package com.app.positionback.service.complain;

import com.app.positionback.domain.complain.ComplainVO;
import com.app.positionback.repository.complain.ComplainDAO;
import com.app.positionback.repository.member.MemberDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
@RequiredArgsConstructor
public class ComplainServiceImpl implements ComplainService {
    private final ComplainDAO complainDAO;
    private final MemberDAO memberDAO;

    @Override
    public void registerComplain(ComplainVO complainVO) {
        complainDAO.saveComplain(complainVO);
        memberDAO.incrementComplaintCount(complainVO.getMemberId());
    }

    @Override
    public void changeComplainStatus(ComplainVO complainVO) {
        complainDAO.updateComplainStatus(complainVO);
    }
}
