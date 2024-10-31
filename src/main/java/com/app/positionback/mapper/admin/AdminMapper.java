package com.app.positionback.mapper.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.member.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    public List<MemberDTO> selectAllMembers();
    public List<CorporationDTO> selectAllCorporationMembers();
}
