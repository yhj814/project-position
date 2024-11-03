package com.app.positionback.mapper.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.inquiry.InquiryDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.utill.Pagination;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminMapper {
    // 회원 관리
    public List<MemberDTO> selectAllMembers(@Param("pagination") Pagination pagination);
    List<CorporationDTO> selectAllCorporationMembers(@Param("pagination") Pagination pagination);
    // 문의 관리
    List<InquiryDTO> selectAllMemberInquiry(@Param("pagination") Pagination pagination);
    List<InquiryDTO> selectAllCorporationInquiry(@Param("pagination") Pagination pagination);
}
