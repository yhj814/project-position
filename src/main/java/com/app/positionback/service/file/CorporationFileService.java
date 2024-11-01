package com.app.positionback.service.file;

import com.app.positionback.domain.file.CorporationFileVO;
import com.app.positionback.domain.file.FileDTO;

public interface CorporationFileService {
    public void register(CorporationFileVO corporationFileVO);
    public FileDTO getCorporationFile(Long corporationId);
}
