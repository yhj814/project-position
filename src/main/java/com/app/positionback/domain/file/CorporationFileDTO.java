package com.app.positionback.domain.file;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
public class CorporationFileDTO {
    private Long id;
    private Long corporationId;

    public CorporationFileVO toVO(){
        return new CorporationFileVO(id, corporationId);
    }
}
