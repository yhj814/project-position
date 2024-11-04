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
import com.app.positionback.utill.Pagination;

import java.util.List;

public interface AdminService {
    // 회원 관리
    List<MemberDTO> getMembers(Pagination pagination);
    List<CorporationDTO> getCorporationMembers(Pagination pagination);
    // 지원 현황 관리
    List<ApplyDTO> getApplys();
    List<InterviewDTO> getInterviews();
    List<PositionDTO> getPositions();
    // 결제 관리
    List<PaymentDTO> getPayments();
    // 작성 관리
    List<NoticeDTO> getNotices();
    List<PostDTO> getPosts();
    List<ReplyDTO> getReplys();
    // 후기 관리
    List<InterviewReviewDTO> getInterviewReviews();
    List<EvaluationCorporationDTO> getEvaluationCorporations();
    List<EvaluationPositionerDTO> getEvaluationPositioners();
    // 문의 관리
    List<InquiryDTO> getMemberInquiry(Pagination pagination);
    List<InquiryDTO> getCorporationInquiry(Pagination pagination);
    // 신고 관리
    List<ComplainDTO> getComplains();
}
