package com.app.positionback.domain.review;

import com.app.positionback.domain.evaluation.EvaluationVO;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CorporationReviewDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String reviewContent;
    private String reviewTips;
    private Long applyId;
    private String createdDate;
    private String updatedDate;
    private String evaluationOverall;
    private String evaluationDifficulty;

    public CorporationReviewVO toVO() {
        return new CorporationReviewVO(id, reviewContent, reviewTips, applyId, createdDate, updatedDate);
    }
}