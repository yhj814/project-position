package com.app.positionback.service.inquiry;

import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.inquiry.InquiryVO;
import org.springframework.web.multipart.MultipartFile;

public interface InquiryService {
    public void saveInquiry(InquiryDTO inquiryDTO, MultipartFile file) throws Exception;
}
