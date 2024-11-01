package com.app.positionback.service.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.mapper.admin.AdminMapper;
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
    private final AdminMapper adminMapper;

    // 회원 관리
    public List<MemberDTO> getMembers() {
        return adminMapper.selectAllMembers();
    }

    public List<CorporationDTO> getCorporationMembers() {
        return adminMapper.selectAllCorporationMembers();
    }

    // 문의 관리
    public List<InquiryDTO> getMemberInquiry() {
        return adminMapper.selectAllMemberInquiry();
    }

    public List<InquiryDTO> getCorporationInquiry() {
        return adminMapper.selectAllCorporationInquiry();
    }
}
