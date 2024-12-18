package com.app.positionback.domain.file;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
public class CorporationFileDTO {
    private Long id;
    private Long corporationId;
    private String corporationFileType;

    public CorporationFileVO toVO(){
        return new CorporationFileVO(id, corporationId,corporationFileType);
    }
}
