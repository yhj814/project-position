package com.app.positionback.mapper.corporation;

import com.app.positionback.domain.corporation.CorporationVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface CorporationMapper {
//    회원가입
    public void insert(CorporationVO corporationVO);
    public Long selectLastInsertId();
    public int selectCountByCorporationEmail(String corporationEmail);
}
