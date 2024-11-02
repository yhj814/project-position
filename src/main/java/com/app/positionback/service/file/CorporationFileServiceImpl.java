package com.app.positionback.service.file;

import com.app.positionback.domain.file.CorporationFileVO;
import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.repository.file.CorporationFileDAO;
import com.app.positionback.repository.file.FileDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class CorporationFileServiceImpl implements CorporationFileService {
    private final CorporationFileDAO corporationFileDAO;
    private final FileDAO fileDAO;

    @Override
    public void register(CorporationFileVO corporationFileVO) {
        corporationFileDAO.save(corporationFileVO);
    }

//    @Override
//    public FileDTO getCorporationFile(Long corporationId) {
//        Long fileId = corporationFileDAO.getFileIdByCorporationId(corporationId);
//        return fileDAO.findById(fileId);
//    }
}
