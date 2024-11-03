package com.app.positionback.repository.file;

import com.app.positionback.domain.file.CorporationFileVO;
import com.app.positionback.mapper.file.CorporationFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CorporationFileDAO {
    private final CorporationFileMapper corporationFileMapper;

    public void save(CorporationFileVO corporationFileVO){
        corporationFileMapper.insert(corporationFileVO);
    }

    public Long getFileIdByCorporationId(Long corporationId){
        return corporationFileMapper.selectFileIdByCorporationId(corporationId);
    }
}
