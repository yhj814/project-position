package com.app.positionback.service.file;

import com.app.positionback.domain.file.FileVO;
import com.app.positionback.repository.file.FileDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class FileServiceImpl implements FileService{
    private final FileDAO fileDAO;

    @Override
    public void register(FileVO fileVO) {
        fileDAO.save(fileVO);
    }

    @Override
    public Long getLastInsertId() {
        return fileDAO.findLastInsertId();
    }
}
