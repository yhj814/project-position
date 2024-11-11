package com.app.positionback.service.corporation;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.domain.apply.ApplyListDTO;
import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.utill.Pagination;

import java.util.List;
import java.util.Optional;

public interface CorporationService {
    public void join(CorporationVO corporationVO);
    public Long getLastInsertId();
    public int checkCorporationEmail(String corporationEmail);
    public Optional<CorporationVO> login(MemberDTO memberDTO);
    public FileDTO getCorporationFileById(Long corporationId);
    public FileDTO getApplyFileById(Long applyId);
    public Optional<CorporationVO> getCorporationById(Long id);
}
