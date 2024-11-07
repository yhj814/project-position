package com.app.positionback.repository.admin;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.domain.complain.ComplainDTO;
import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.evaluation.EvaluationCorporationDTO;
import com.app.positionback.domain.evaluation.EvaluationPositionerDTO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.interview.InterviewDTO;
import com.app.positionback.domain.interviewreview.InterviewReviewDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.domain.payment.PaymentDTO;
import com.app.positionback.domain.position.PositionDTO;
import com.app.positionback.domain.post.PostDTO;
import com.app.positionback.domain.reply.ReplyDTO;
import com.app.positionback.mapper.admin.AdminMapper;
import com.app.positionback.utill.Pagination;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminDAO {
    private final AdminMapper adminMapper;

    // 회원 관리
    // 일반 회원 조회
    public List<MemberDTO> memberInformation(Pagination pagination) {
        return adminMapper.selectAllMembers(pagination);
    }

    // 일반 회원 전체 인원 조회
    public int getMemberTotal() {
        return adminMapper.selectMemberTotal();
    }

    // 기업 회원 조회
    public List<CorporationDTO> corporationInformation(Pagination pagination) {
        return adminMapper.selectAllCorporationMembers(pagination);
    }

    // 기업 회원 전체 인원 조회
    public int getCorporationTotal() {
        return adminMapper.selectCorporationTotal();
    }

    // 지원현황 관리
    // 지원 현황 조회
    public List<ApplyDTO> applyInformation() {
        return adminMapper.selectAllApply();
    }
    // 면접 현황 조회
    public List<InterviewDTO> interviewInformation() {
        return adminMapper.selectAllInterview();
    }
    // 인턴십 현황 조회
    public List<PositionDTO> positionInformation() {
        return adminMapper.selectAllPosition();
    }

    // 결제 관리
    // 지원료 결제
    public List<PaymentDTO> paymentInformation() {
        return adminMapper.selectAllPayment();
    }

    // 작성 관리
    // 공고 작성
    public List<NoticeDTO> noticeInformation() {
        return adminMapper.selectAllNotice();
    }
    // 게시글 작성
    public List<PostDTO> postInformation() {
        return adminMapper.selectAllPost();
    }
    // 댓글 작성
    public List<ReplyDTO> replyInformation() {
        return adminMapper.selectAllReply();
    }

    // 후기 관리
    // 면접 후기
    public List<InterviewReviewDTO> InterviewReviewInformation() {
        return adminMapper.selectAllInterviewReview();
    }
    // 인턴십 후기(기업)
    public List<EvaluationCorporationDTO> EvaluationCorporationInformation() {
        return adminMapper.selectAllEvaluationCorporation();
    }
    // 인턴십 후기(인턴)
    public List<EvaluationPositionerDTO> EvaluationPositionerInformation() {
        return adminMapper.selectAllEvaluationPositioner();
    }

    // 문의 관리
    // 일반 회원 문의 전체 조회 memberInquiry
    public List<InquiryDTO> memberInquiry(Pagination pagination) {
        return adminMapper.selectAllMemberInquiry(pagination);
    }
    // 기업 회원 문의 전체 조회
    public List<InquiryDTO> corporationInquiry(Pagination pagination) {
        return adminMapper.selectAllCorporationInquiry(pagination);
    }

    // 신고 관리
    // 기업 후기 신고
    public List<ComplainDTO> complainInformation() {
        return adminMapper.selectAllComplain();
    }
}
