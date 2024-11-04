package com.app.positionback.domain.interviewreview;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class InterviewReviewVO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long coporationId;
    private Long jobcategoryAId;
    private String interviewDate;
    private String interviewMethod;
    private String interviewTips;
    private String interviewPassed;
    private String createdDate;
    private String updatedDate;
}