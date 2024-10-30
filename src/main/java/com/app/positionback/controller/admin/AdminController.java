package com.app.positionback.controller.admin;

import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.mapper.admin.AdminMapper;
import com.app.positionback.service.inquiry.InquiryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/admin/*")
@RequiredArgsConstructor
@Slf4j
public class AdminController {
    private final InquiryService inquiryService;

    @GetMapping("admin")
    public void gotoInquiryAdmin(InquiryDTO inquiryDTO, Model model) {}
}

