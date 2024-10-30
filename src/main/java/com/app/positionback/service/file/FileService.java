package com.app.positionback.service.file;

import com.app.positionback.domain.file.FileVO;

public interface FileService {
    public void register(FileVO fileVO);
    public Long getLastInsertId();
}
