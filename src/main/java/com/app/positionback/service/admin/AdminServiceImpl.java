package com.app.positionback.service.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.member.MemberDTO;
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
        pagination.progress();
        return adminDAO.memberInformation(pagination);
    }

    // 기업 회원 정보 조회
    public List<CorporationDTO> getCorporationMembers(Pagination pagination) {
        return adminDAO.corporationInformation(pagination);
    }

    // 문의 관리
    public List<InquiryDTO> getMemberInquiry(Pagination pagination) {
        pagination.progress();
        return adminDAO.memberInquiry(pagination);
    }

    public List<InquiryDTO> getCorporationInquiry(Pagination pagination) {
        pagination.progress();
        return adminDAO.corporationInquiry(pagination);
    }
}
