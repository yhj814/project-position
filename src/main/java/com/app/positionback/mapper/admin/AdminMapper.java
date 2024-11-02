package com.app.positionback.mapper.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.utill.Pagination;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    // 회원 관리
    public List<MemberDTO> selectAllMembers(Pagination pagination);
    public List<CorporationDTO> selectAllCorporationMembers(Pagination pagination);
    // 문의 관리
    public List<InquiryDTO> selectAllMemberInquiry(Pagination pagination);
    public List<InquiryDTO> selectAllCorporationInquiry(Pagination pagination);
}
