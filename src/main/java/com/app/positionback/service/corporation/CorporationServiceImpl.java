package com.app.positionback.service.corporation;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.repository.corporation.CorporationDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class CorporationServiceImpl implements CorporationService {
    private final CorporationDAO corporationDAO;

    @Override
    public void join(CorporationVO corporationVO) {
        corporationDAO.save(corporationVO);
    }

    @Override
    public Long getLastInsertId() {
        return corporationDAO.findLastInsertId();
    }

    @Override
    public int checkCorporationEmail(String corporationEmail) {
        return corporationDAO.findCountByCorporationEmail(corporationEmail);
    }

    @Override
    public Optional<CorporationVO> login(MemberDTO memberDTO) {
        return corporationDAO.findByCorporationEmailAndCorporationPassword(memberDTO);
    }
}
