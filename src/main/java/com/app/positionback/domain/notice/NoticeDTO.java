package com.app.positionback.domain.notice;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class NoticeDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long corporationId;
    private String noticeTitle;
    private String noticeCareer;
    private String noticeEducation;
    private String noticeWorkDate;
    private String noticeWordLocation;
    private String noticeEndDate;
    private String createdDate;
    private String updatedDate;

    public NoticeVO toVO(){
        return new NoticeVO(id,corporationId,noticeTitle,noticeCareer,noticeEducation,noticeWorkDate,noticeWordLocation,noticeEndDate,createdDate,updatedDate);
    }
}
