package com.app.positionback.repository.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.member.MemberDTO;
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
    // 일반 회원 정보 전체 조회
    public List<MemberDTO> memberInformation() {
        return adminMapper.selectAllMembers();
    }
    // 기업 회원 정보 전체 조회
    public List<CorporationDTO> corporationInformation() {
        return adminMapper.selectAllCorporationMembers();
    }

    // 문의 관리
    // 일반 회원 문의 전체 조회 memberInquiry
    public List<InquiryDTO> memberInquiry() {
        return adminMapper.selectAllMemberInquiry();
    }
    // 기업 회원 문의 전체 조회
    public List<InquiryDTO> corporationInquiry() {
        return adminMapper.selectAllCorporationInquiry();
    }
}
