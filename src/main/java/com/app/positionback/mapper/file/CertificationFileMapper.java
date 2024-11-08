package com.app.positionback.mapper.file;

import com.app.positionback.domain.file.CertificationFileVO;
import com.app.positionback.domain.file.CorporationFileVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface CertificationFileMapper {
    public void insertApplyFile(CertificationFileVO certificationFileVO);
    public Optional<CertificationFileVO> selectFileIdByApplyId(Long applyId);
}
