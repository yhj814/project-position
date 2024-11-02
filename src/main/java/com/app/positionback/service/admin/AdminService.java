package com.app.positionback.service.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.utill.Pagination;

import java.util.List;

public interface AdminService {
    // 회원 관리
    List<MemberDTO> getMembers(Pagination pagination);
    List<CorporationDTO> getCorporationMembers(Pagination pagination);
    // 문의 관리
    List<InquiryDTO> getMemberInquiry(Pagination pagination);
    List<InquiryDTO> getCorporationInquiry(Pagination pagination);
}
