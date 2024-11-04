package com.app.positionback.domain.interview;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class InterviewDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long corporationId;
    private Long resumeId;
    private String interviewDate;
    private String interviewStatus = "면접 예정";

    public InterviewVO toVO() {
        return new InterviewVO(id, corporationId, resumeId, interviewDate, interviewStatus);
    }
}
