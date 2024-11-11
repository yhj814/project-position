package com.app.positionback.repository.corporation;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.mapper.corporation.CorporationMapper;
import com.app.positionback.utill.Pagination;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CorporationDAO {

    private final CorporationMapper corporationMapper;

    // 회원가입
    public void save(CorporationVO corporationVO) {
        corporationMapper.insert(corporationVO);
    }

    public Long findLastInsertId(){
        return corporationMapper.selectLastInsertId();
    }

    public int findCountByCorporationEmail(String corporationEmail){
        return corporationMapper.selectCountByCorporationEmail(corporationEmail);
    }

    public Optional<CorporationVO> findByCorporationEmailAndCorporationPassword(MemberDTO memberDTO){
        return corporationMapper.selectByCorporationEmailAndCorporationPassword(memberDTO);
    }

    public Optional<CorporationVO> findByCorporationId(Long id){
        return corporationMapper.selectByCorporationId(id);
    }


}
