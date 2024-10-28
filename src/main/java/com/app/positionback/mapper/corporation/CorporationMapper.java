package com.app.positionback.mapper.corporation;

import com.app.positionback.domain.corporation.CorporationVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface CorporationMapper {
//    회원가입
    public void insertCorporation(CorporationVO corporationVO);

//    로그인
    public Optional<CorporationVO> selectByCorporationEmailAndPassword(CorporationVO corporationVO);
}
