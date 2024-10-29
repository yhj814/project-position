package com.app.positionback.service.inquiry;

import com.app.positionback.domain.inquiry.InquiryVO;
import org.springframework.web.multipart.MultipartFile;

public interface InquiryService {
    public void saveInquiry(InquiryVO inquiryVO, MultipartFile file) throws Exception;
}
