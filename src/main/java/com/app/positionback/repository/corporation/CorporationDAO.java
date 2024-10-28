package com.app.positionback.repository.corporation;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.mapper.corporation.CorporationMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CorporationDAO {

    private final CorporationMapper corporationMapper;

    // 회원가입
    public void saveCorporation(CorporationVO corporationVO) {
        corporationMapper.insertCorporation(corporationVO);

    }

    //        로그인
    public Optional<CorporationVO> findCorporationByEmailAndPassword(CorporationVO corporationVO){
        return corporationMapper.selectByCorporationEmailAndPassword(corporationVO);

    }
}
