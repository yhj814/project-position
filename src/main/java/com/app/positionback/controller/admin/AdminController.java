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

//    private final AdminMapper adminMapper;
//
//    @GetMapping("/admin")
//    public String goToAdminPage(@RequestParam(required = false) String section, Model model) {
//        // 선택적 파라미터 'section'에 따라 특정 섹션의 데이터를 조회
//        // section 파라미터에 따라 AdminMapper에서 해당 데이터를 조회하여 Model에 추가한다.
//        // model.addAttribute("data", ...) 구문을 통해 뷰에서 data라는 이름으로 조회된 데이터를 사용할 수 있도록 설정한다.
//        // model.addAttribute("section", section)은 현재 section 값을 뷰에서 활용할 수 있도록 전달한다.
//        // 최종적으로 admin/admin 페이지가 렌더링된다.
//
//        // 회원 관리
//
//        // 'section' 값이 "selectMembers"일 경우
//        // 일반 회원 데이터를 조회하여 모델에 추가한다.
//        if ("selectMembers".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByMember());
//        } else if ("selectcorporateMembers".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByCorporateMember());
//
//            // 지원 현황 관리
//        } else if ("applicationStatus".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByApplicationStatus());
//        } else if ("interviewStatus".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByInterviewStatus());
//        } else if ("internshipStatus".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByInternshipStatus());
//
//            // 결제 관리
//        } else if ("payments".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByPayments());
//
//            // 작성 관리
//        } else if ("jobPostings".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByNotice());
//        } else if ("boardPosts".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByPosts());
//        } else if ("comments".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByReply());
//
//            // 후기 관리
//        } else if ("interviewReviews".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByInterviewReviews());
//        } else if ("corporateInternshipReviews".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByToPositionReview());
//        } else if ("internInternshipReviews".equals(section)) {
//            model.addAttribute("data", adminMapper.selctByToCorporationReview());
//
//            // 문의 관리
//        } else if ("generalInquiries".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByInquiry());
//        } else if ("corporateInquiries".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByCorporateInquiry());
//
//            // 신고 관리
//        } else if ("corporateReviewReports".equals(section)) {
//            model.addAttribute("data", adminMapper.selectByComplain());
//
//            // 기본 대시보드 데이터
//        } else {
//            model.addAttribute("data", adminMapper.getDashboardData());
//        }
//
//        model.addAttribute("section", section);
//        return "admin/admin";
//    }
}

