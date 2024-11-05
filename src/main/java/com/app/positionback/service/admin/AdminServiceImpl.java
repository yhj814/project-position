package com.app.positionback.service.admin;

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
import com.app.positionback.repository.admin.AdminDAO;
import com.app.positionback.utill.Pagination;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class AdminServiceImpl implements AdminService {
    private final AdminDAO adminDAO;

    // 회원 관리
    // 일반 회원 정보 조회
    public List<MemberDTO> getMembers(Pagination pagination) {
        return adminDAO.memberInformation(pagination);
    }

    // 일반 회원 전체 인원
    public int getMemberTotal() {
        return adminDAO.getMemberTotal();
    }

    // 기업 회원 정보 조회
    public List<CorporationDTO> getCorporationMembers(Pagination pagination) {
        return adminDAO.corporationInformation(pagination);
    }

    // 기업 회원 전체 인원
    public int getCorporationTotal() {
        return adminDAO.getCorporationTotal();
    }


    // 지원 현황 관리
    // 지원 현황
    public List<ApplyDTO> getApplys() {
        return adminDAO.applyInformation();
    }
    // 면접 현황
    public List<InterviewDTO> getInterviews() {
        return adminDAO.interviewInformation();
    }
    // 인턴십 현황
    public List<PositionDTO> getPositions() {
        return adminDAO.positionInformation();
    }

    // 결제 관리
    // 지원료 결제
    public List<PaymentDTO> getPayments() {
        return adminDAO.paymentInformation();
    }

    // 작성 관리
    // 공고 작성
    public List<NoticeDTO> getNotices() {
        return adminDAO.noticeInformation();
    }
    // 게시글 작성
    public List<PostDTO> getPosts() {
        return adminDAO.postInformation();
    }
    // 댓글 작성
    public List<ReplyDTO> getReplys() {
        return adminDAO.replyInformation();
    }

    // 후기 관리
    // 면접 후기
    public List<InterviewReviewDTO> getInterviewReviews() {
        return adminDAO.InterviewReviewInformation();
    }
    // 인턴십 후기(기업)
    public List<EvaluationCorporationDTO> getEvaluationCorporations() {
        return adminDAO.EvaluationCorporationInformation();
    }
    // 인턴십 후기(인턴)
    public List<EvaluationPositionerDTO> getEvaluationPositioners() {
        return adminDAO.EvaluationPositionerInformation();
    }

    // 문의 관리
    // 일반 문의
    public List<InquiryDTO> getMemberInquiry(Pagination pagination) {
        pagination.progress();
        return adminDAO.memberInquiry(pagination);
    }

    // 기업 문의
    public List<InquiryDTO> getCorporationInquiry(Pagination pagination) {
        pagination.progress();
        return adminDAO.corporationInquiry(pagination);
    }

    // 신고 관리
    // 기업 후기 신고
    public List<ComplainDTO> getComplains() {
        return adminDAO.complainInformation();
    }
}
