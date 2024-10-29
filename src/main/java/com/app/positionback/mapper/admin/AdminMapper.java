package com.app.positionback.mapper.admin;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.inquiry.InquiryVO;
import com.app.positionback.domain.member.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface AdminMapper {
//    // Optional : 값이 있을수도 있고, 없을수도 있을 상황을 처리하기 위해 사용
//    // NullPointerException을 방지하고, 값이 존재하지 않는 경우에 대한 처리를 더욱 명확하게 할 수 있습니다.
//
//    // 회원 관리
//    public Optional<MemberVO> selectByMember();
//    public Optional<CorporationVO> selectByCorporateMember();
//    // 지원 현황 관리
//    public Optional<ApplyDTO> selectByApplicationStatus();
//    public Optional<InterviewDTO> selectByInterviewStatus();
//    public Optional<PositionDTO> selectByInternshipStatus();
//    // 결제 관리
//    public Optional<PaymentDTO> selectByPayments();
//    // 작성 관리
//    public Optional<NoticeDTO> selectByNotice();
//    public Optional<PostDTO> selectByPosts();
//    public Optional<ReplyDTO> selectByReply();
//    // 후기 관리
//    public Optional<InterviewReviewDTO> selectByInterviewReviews();
//    public Optional<CorporationReviewDTO> selectByToPositionReview();
//    public Optional<PositionReviewDTO> selctByToCorporationReview();
//    //  문의 관리
//    public Optional<InquiryDTO> selectByInquiry();
//    public Optional<InquiryDTO> selectByCorporateInquiry();
//    // 신고 관리
//    public Optional<ComplainDTO> selectByComplain();
//
//    public Optional<DashboardDataVO> getDashboardData();
}
