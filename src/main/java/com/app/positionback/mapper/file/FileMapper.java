package com.app.positionback.mapper.file;

import com.app.positionback.domain.file.FileVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FileMapper {
    public void insert(FileVO fileVO);
    public Long selectLastInsertId();
}
