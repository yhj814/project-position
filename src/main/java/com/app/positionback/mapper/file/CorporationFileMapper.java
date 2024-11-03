package com.app.positionback.mapper.file;

import com.app.positionback.domain.file.CorporationFileVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CorporationFileMapper {
    public void insert(CorporationFileVO corporationFileVO);
    public Long selectFileIdByCorporationId(Long corporationId);
}
