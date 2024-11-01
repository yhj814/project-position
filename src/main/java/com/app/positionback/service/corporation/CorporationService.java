package com.app.positionback.service.corporation;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.member.MemberDTO;

import java.util.Optional;

public interface CorporationService {
    public void join(CorporationVO corporationVO);
    public Long getLastInsertId();
    public int checkCorporationEmail(String corporationEmail);
    public Optional<CorporationVO> login(MemberDTO memberDTO);
    public FileDTO getCorporationFileById(Long corporationId);
}
