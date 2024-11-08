package com.app.positionback.domain.file;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CertificationFileDTO {
    private Long fileId;
    private Long applyId;
    private String fileName;
    private String filePath;

    public CertificationFileVO toVO() {
        return new CertificationFileVO(fileId,applyId);
    }
}
