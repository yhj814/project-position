package com.app.positionback.mapper.corporation;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.utill.Pagination;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CorporationMapper {
//    회원가입
    public void insert(CorporationVO corporationVO);
    public Long selectLastInsertId();
    public int selectCountByCorporationEmail(String corporationEmail);
    public Optional<CorporationVO> selectByCorporationEmailAndCorporationPassword(MemberDTO memberDTO);
    public Optional<CorporationVO> selectByCorporationId(Long id);
}
