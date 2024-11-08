package com.app.positionback.service.complain;

import com.app.positionback.domain.complain.ComplainVO;

public interface ComplainService {
    public void registerComplain(ComplainVO complainVO);
    public void changeComplainStatus(ComplainVO complainVO);
}
