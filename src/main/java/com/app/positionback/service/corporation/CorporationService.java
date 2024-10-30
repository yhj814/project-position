package com.app.positionback.service.corporation;

import com.app.positionback.domain.corporation.CorporationVO;

public interface CorporationService {
    public void join(CorporationVO corporationVO);
    public Long getLastInsertId();
    public int checkCorporationEmail(String corporationEmail);
}
