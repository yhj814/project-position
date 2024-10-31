package com.app.positionback.service.inquiry;

import com.app.positionback.domain.inquiry.InquiryVO;
import com.app.positionback.repository.inquiry.InquiryDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class InquiryServiceImpl implements InquiryService {
    private final InquiryDAO inquiryDAO;

    @Override
    public void write(InquiryVO inquiryVO){
        inquiryDAO.insert(inquiryVO);
    };

}