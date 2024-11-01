package com.app.positionback.repository.file;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.file.FileVO;
import com.app.positionback.mapper.file.FileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class FileDAO {
    private final FileMapper fileMapper;

    public void save(FileVO fileVO){
        fileMapper.insert(fileVO);
    }

    public Long findLastInsertId(){
        return fileMapper.selectLastInsertId();
    }

    public FileDTO findById(Long id){
        return fileMapper.selectById(id);
    }
}
