package com.app.positionback.controller.admin;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.domain.complain.ComplainDTO;
import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.evaluation.EvaluationCorporationDTO;
import com.app.positionback.domain.evaluation.EvaluationPositionerDTO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.interview.InterviewDTO;
import com.app.positionback.domain.interviewreview.InterviewReviewDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberListDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.domain.payment.PaymentDTO;
import com.app.positionback.domain.position.PositionDTO;
import com.app.positionback.domain.post.PostDTO;
import com.app.positionback.domain.reply.ReplyDTO;
import com.app.positionback.service.admin.AdminService;
import com.app.positionback.utill.Pagination;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admin/*")
@RequiredArgsConstructor
@Slf4j
public class AdminController {

    private final AdminService adminService;

    @GetMapping("admin")
    public String goToAdminPage() {
        return "admin/admin";
    }

    // 일반회원 정보를 조회하고 json 형식으로 반환한다.
    // AdminService의 getMembers() 메서드를 호출하여 전체 일반 회원 정보를 가져온다.
    // 이 메서드는 List<MemberDTO> 타입의 데이터를 반환하여 JSON으로 응답한다.
    // 자바스크립트 코드에 fetch 모듈 admin서비스.js에 레이아웃

    // 회원 관리
    // 일반 회원 정보 조회
    @GetMapping("/position/members/{page}")
    @ResponseBody
    public MemberListDTO getMembers(@PathVariable("page") Integer page, Pagination pagination) {
//        // 정렬 조건이 비어 있으면 기본 정렬 기준을 "recent"로 설정합니다.
//        if (pagination.getOrder() == null) {
//            pagination.setOrder("recent");
//        }
//
//        // `order` 값이 올바른지 확인하여 기본 정렬 기준으로 지정할 수도 있습니다.
//        if (!pagination.getOrder().equals("name") &&
//                !pagination.getOrder().equals("status") &&
//                !pagination.getOrder().equals("recent")) {
//            pagination.setOrder("recent"); // 예외 처리: 유효하지 않은 정렬 기준일 경우 기본값 사용
//        }

//        // 페이지네이션 계산 수행
//        pagination.progress();

        // 정렬 및 페이징 조건에 맞는 회원 목록을 조회하여 반환
        return adminService.getMembers(page, pagination);
    }

    // 기업 회원 정보 조회
    @GetMapping("/position/corporation-members")
    @ResponseBody
    public List<CorporationDTO> getCorporationMembers(Pagination pagination) {
        pagination.progress();
        return adminService.getCorporationMembers(pagination);
    }

    // 지원 현황 관리
    // 지원 현황
    @GetMapping("/position/apply")
    @ResponseBody
    public List<ApplyDTO> getApplys () {
        return adminService.getApplys();
    }
    // 면접 현황
    @GetMapping("/position/interview")
    @ResponseBody
    public List<InterviewDTO> getInterviews(){
        return adminService.getInterviews();
    }
    // 인턴십 현황
    @GetMapping("/position/position")
    @ResponseBody
    public List<PositionDTO> getPositions(){
        return adminService.getPositions();
    }

    // 결제 관리
    // 지원료 결제
    @GetMapping("/position/payment")
    @ResponseBody
    public List<PaymentDTO> getPayments(){
        return adminService.getPayments();
    }

    // 작성 관리
    // 공고 작성
    @GetMapping("/position/notice")
    @ResponseBody
    public List<NoticeDTO> getNotices(){
        return adminService.getNotices();
    }
    // 게시글 작성
    @GetMapping("/position/post")
    @ResponseBody
    public List<PostDTO> getPosts(){
        return adminService.getPosts();
    }
    // 댓글 작성
    @GetMapping("/position/reply")
    @ResponseBody
    public List<ReplyDTO> getReplys(){
        return adminService.getReplys();
    }

    // 후기 관리
    // 면접 후기
    @GetMapping("/position/interview-review")
    @ResponseBody
    public List<InterviewReviewDTO> getInterviewReviews(){
        return adminService.getInterviewReviews();
    }
    // 인턴십 후기(기업)
    @GetMapping("/position/evaluation-corporation")
    @ResponseBody
    public List<EvaluationCorporationDTO> getEvaluationCorporations(){
        return adminService.getEvaluationCorporations();
    }
    // 인턴십 후기(인턴)
    @GetMapping("/position/evaluation-positioner")
    @ResponseBody
    public List<EvaluationPositionerDTO> getEvaluationPositioners(){
        return adminService.getEvaluationPositioners();
    }

    // 문의 관리
    // 일반 회원 문의 정보 조회
    @GetMapping("/position/member-inquiry")
    @ResponseBody
    public List<InquiryDTO> getMemberInquiry(Pagination pagination) {
        pagination.progress();
        return adminService.getMemberInquiry(pagination);
    }

    // 기업 회원 문의 정보 조회
    @GetMapping("/position/corporation-inquiry")
    @ResponseBody
    public List<InquiryDTO> getCorporationInquiry(Pagination pagination) {
        pagination.progress();
        return adminService.getCorporationInquiry(pagination);
    }

    // 신고 관리
    // 기업 후기 신고
    @GetMapping("/position/complain")
    @ResponseBody
    public List<ComplainDTO> getComplains() {
        return adminService.getComplains();
    }































}
