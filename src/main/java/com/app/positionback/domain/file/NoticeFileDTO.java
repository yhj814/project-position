package com.app.positionback.domain.file;

import lombok.*;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@NoArgsConstructor
@AllArgsConstructor
public class NoticeFileDTO {
    private Long fileId;
    private Long noticeId;
    private String fileName;
    private String filePath;

    public NoticeFileVO toVO() {
        return new NoticeFileVO(fileId, noticeId);
    }
}
