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
    private String noticeWordLocation;
    private String noticeEndDate;
    private String createdDate;
    private String updatedDate;
    private String noticeWorkStartTime;
    private String noticeWorkEndTime;
    private String noticeWorkStartDate;
    private String noticeWorkEndDate;
    private String noticeJobCategoryName;
    private String corporationName;

    public NoticeVO toVO(){
        return new NoticeVO(id,corporationId,noticeTitle,noticeCareer,noticeEducation,noticeWordLocation,noticeEndDate,createdDate,updatedDate,noticeWorkStartTime,noticeWorkEndTime,noticeWorkStartDate,noticeWorkEndDate,noticeJobCategoryName);
    }
}
