package com.app.positionback.service.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.member.MemberDTO;

import java.util.List;

public interface AdminService {
    List<MemberDTO> getMembers();
    List<CorporationDTO> getCorporatationMembers();
}
