package com.app.positionback.service.apply;

import com.app.positionback.domain.apply.ApplyListDTO;
import com.app.positionback.domain.apply.ApplyVO;
import com.app.positionback.utill.Pagination;

public interface ApplyService {
    public ApplyListDTO getApplyByCorporationId(int page, Pagination pagination, Long corporationId);
    public int getTotal(Pagination pagination, Long corporationId);
    public void setApplyStatus(ApplyVO applyVO);
}
