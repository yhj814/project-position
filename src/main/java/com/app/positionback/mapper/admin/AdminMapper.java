package com.app.positionback.mapper.admin;

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
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminMapper {
    // 회원 관리
    List<MemberDTO> selectAllMembers(@Param("pagination") Pagination pagination);
    List<CorporationDTO> selectAllCorporationMembers(@Param("pagination") Pagination pagination);
    // 지원현황 관리
    List<ApplyDTO> selectAllApply();
    List<InterviewDTO> selectAllInterview();
    List<PositionDTO> selectAllPosition();
    // 결제 관리
    List<PaymentDTO> selectAllPayment();
    // 작성 관리
    List<NoticeDTO> selectAllNotice();
    List<PostDTO> selectAllPost();
    List<ReplyDTO> selectAllReply();
    // 후기 관리
    List<InterviewReviewDTO> selectAllInterviewReview();
    List<EvaluationCorporationDTO> selectAllEvaluationCorporation();
    List<EvaluationPositionerDTO> selectAllEvaluationPositioner();
    // 문의 관리
    List<InquiryDTO> selectAllMemberInquiry(@Param("pagination") Pagination pagination);
    List<InquiryDTO> selectAllCorporationInquiry(@Param("pagination") Pagination pagination);
    // 신고 관리
    List<ComplainDTO> selectAllComplain();
}
