package com.app.positionback.domain.interviewreview;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class InterviewReviewDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long corporationId;
    private Long jobcategoryAId;
    private String interviewDate;
    private String interviewMethod;
    private String interviewTips;
    private String interviewPassed;
    private String createdDate;
    private String updatedDate;

    public InterviewReviewVO toVO() {
        return new InterviewReviewVO(id, corporationId, jobcategoryAId, interviewDate, interviewMethod, interviewTips, interviewPassed, createdDate, updatedDate);
    }
}
