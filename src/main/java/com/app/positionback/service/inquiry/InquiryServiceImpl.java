package com.app.positionback.service.inquiry;

import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.inquiry.InquiryVO;
import com.app.positionback.domain.member.MemberVO;
import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.repository.inquiry.InquiryDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class InquiryServiceImpl implements InquiryService {
    private final InquiryDAO inquiryDAO;

    public void processInquiry(InquiryDTO inquiryDTO) {
        if ("기업".equals(inquiryDTO.getInquiryType())) {
            CorporationVO corpVO = inquiryDTO.toCorpVO();
            inquiryDAO.insertForCorporation(corpVO); // DAO 호출
        } else {
            MemberVO memberVO = inquiryDTO.toMemVO();
            inquiryDAO.insertForMember(memberVO); // DAO 호출
        }
    }

    @Override
    public void write(InquiryVO inquiryVO){
        inquiryDAO.insert(inquiryVO);
    };
}

