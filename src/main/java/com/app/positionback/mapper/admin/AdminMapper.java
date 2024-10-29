package com.app.positionback.mapper.admin;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.inquiry.InquiryVO;
import com.app.positionback.domain.member.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface AdminMapper {
    // 회원 관리
    public Optional<MemberVO> selectByMember();
    public Optional<CorporationVO> selectByCorporateMember();
    // 지원 현황 관리
    public Optional<ApplicationStatusDTO> getApplicationStatus();
    public Optional<InterviewStatusDTO> getInterviewStatus();
    public Optional<InternshipStatusDTO> getInternshipStatus();
    // 결제 관리
    public Optional<PaymentDTO> getPayments();
    // 작성 관리
    public Optional<JobPostingDTO> getJobPostings();
    public Optional<BoardPostDTO> getBoardPosts();
    public Optional<CommentDTO> getComments();
    // 후기 관리
    public Optional<InterviewReviewDTO> getInterviewReviews();
    public Optional<CorporateInternshipReviewDTO> getCorporateInternshipReviews();
    public Optional<InternInternshipReviewDTO> getInternInternshipReviews();
    //  문의 관리
    public Optional<InquiryDTO> selectByInquiry();
    public Optional<InquiryDTO> selectByCorporateInquiry();
    // 신고 관리
    public Optional<CorporateReviewReportDTO> getCorporateReviewReports();

    public Optional<DashboardDataVO> getDashboardData();
}
