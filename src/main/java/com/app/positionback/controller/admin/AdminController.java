package com.app.positionback.controller.admin;

import com.app.positionback.mapper.admin.AdminMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/admin")
@RequiredArgsConstructor
@Slf4j
public class AdminController {

    private final AdminMapper adminMapper;

    @GetMapping("/admin")
    public String goToAdminPage(@RequestParam(required = false) String section, Model model) {
        // 선택적 파라미터 'section'에 따라 특정 섹션의 데이터를 조회
        // section 파라미터에 따라 AdminMapper에서 해당 데이터를 조회하여 Model에 추가합니다.
        // model.addAttribute("data", ...) 구문을 통해 뷰에서 data라는 이름으로 조회된 데이터를 사용할 수 있도록 설정합니다.
        // model.addAttribute("section", section)은 현재 section 값을 뷰에서 활용할 수 있도록 전달합니다.
        // 최종적으로 admin/admin 페이지가 렌더링됩니다.

        // 회원 관리

        // 'section' 값이 "selectMembers"일 경우
        // 일반 회원 데이터를 조회하여 모델에 추가한다.
        if ("selectMembers".equals(section)) {
            model.addAttribute("data", adminMapper.selectByMember());
        } else if ("selectcorporateMembers".equals(section)) {
            model.addAttribute("data", adminMapper.selectByCorporateMember());

            // 지원 현황 관리
        } else if ("applicationStatus".equals(section)) {
            model.addAttribute("data", adminMapper.getApplicationStatus());
        } else if ("interviewStatus".equals(section)) {
            model.addAttribute("data", adminMapper.getInterviewStatus());
        } else if ("internshipStatus".equals(section)) {
            model.addAttribute("data", adminMapper.getInternshipStatus());

            // 결제 관리
        } else if ("payments".equals(section)) {
            model.addAttribute("data", adminMapper.getPayments());

            // 작성 관리
        } else if ("jobPostings".equals(section)) {
            model.addAttribute("data", adminMapper.getJobPostings());
        } else if ("boardPosts".equals(section)) {
            model.addAttribute("data", adminMapper.getBoardPosts());
        } else if ("comments".equals(section)) {
            model.addAttribute("data", adminMapper.getComments());

            // 후기 관리
        } else if ("interviewReviews".equals(section)) {
            model.addAttribute("data", adminMapper.getInterviewReviews());
        } else if ("corporateInternshipReviews".equals(section)) {
            model.addAttribute("data", adminMapper.getCorporateInternshipReviews());
        } else if ("internInternshipReviews".equals(section)) {
            model.addAttribute("data", adminMapper.getInternInternshipReviews());

            // 문의 관리
        } else if ("generalInquiries".equals(section)) {
            model.addAttribute("data", adminMapper.selectByInquiry());
        } else if ("corporateInquiries".equals(section)) {
            model.addAttribute("data", adminMapper.selectByCorporateInquiry());

            // 신고 관리
        } else if ("corporateReviewReports".equals(section)) {
            model.addAttribute("data", adminMapper.getCorporateReviewReports());

            // 기본 대시보드 데이터
        } else {
            model.addAttribute("data", adminMapper.getDashboardData());
        }

        model.addAttribute("section", section);
        return "admin/admin";
    }
}

