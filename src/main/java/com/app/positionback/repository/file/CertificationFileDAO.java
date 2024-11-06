package com.app.positionback.repository.file;

import com.app.positionback.domain.file.CertificationFileVO;
import com.app.positionback.domain.file.CorporationFileVO;
import com.app.positionback.mapper.file.CertificationFileMapper;
import com.app.positionback.mapper.file.CorporationFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CertificationFileDAO {
    private final CertificationFileMapper certificationFileMapper;

    public void save(CertificationFileVO certificationFileVO){
        certificationFileMapper.insertApplyFile(certificationFileVO);
    }

    public Long getFileIdByApplyId(Long applyId){
        return certificationFileMapper.selectFileIdByApplyId(applyId);
    }
}
