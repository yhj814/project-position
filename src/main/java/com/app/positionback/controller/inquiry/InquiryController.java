package com.app.positionback.controller.inquiry;

import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.service.inquiry.InquiryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/customer-service-center/*")
@RequiredArgsConstructor
@Slf4j
public class InquiryController {
    private InquiryService inquiryService;

    @GetMapping("inquiry")
    public void goToInquiryForm(InquiryDTO inquiryDTO) {;}

//    @PostMapping("customer-service-center/inquiry")
//    public RedirectView write(InquiryDTO inquiryDTO) {
//        inquiryService.write(inquiryDTO.toVO());
//        return new RedirectView("admin/admin");
//    }

    @PostMapping("inquiry")
    public RedirectView write(InquiryDTO inquiryDTO) {
        log.info(inquiryDTO.toString());
        inquiryService.write(inquiryDTO.toVO());
        return new RedirectView("admin/admin");
    }

    @GetMapping("faq")
    public String goToFaqForm() {
        return "customer-service-center/faq";
    }
}

