package com.app.positionback.domain.notice;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class NoticeVO {
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
    private Long jobCategorycId;
}
