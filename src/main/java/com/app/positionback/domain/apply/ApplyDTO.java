package com.app.positionback.domain.apply;


import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor
@NoArgsConstructor
public class ApplyDTO {
    @EqualsAndHashCode.Include
    private Long noticeId;
    private Long resumeId;
    private String applyType;
    private String applyStatus;

    // Corporation information
    private String corporationName;
    private Long corporationId;

    // Notice information
    private String noticeTitle;
    private String noticeCareer;
    private String noticeEducation;
    private String noticeWorkStartDate;
    private String noticeWorkEndDate;
    private String noticeWorkStartTime;
    private String noticeWorkEndTime;
    private String noticeEndDate;
    private String noticeJobCategoryName;

    // Member (Applicant) information
    private String memberName;
    private String memberEmail;
    private String memberNickname;

}
