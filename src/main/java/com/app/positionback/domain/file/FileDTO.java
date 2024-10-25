package com.app.positionback.domain.file;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class FileDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String fileName;
    private String filePath;
    private String createdDate;
    private String updatedDate;

    public FileVO toVO(){
        return new FileVO(id, fileName, filePath, createdDate, updatedDate);
    }
}
