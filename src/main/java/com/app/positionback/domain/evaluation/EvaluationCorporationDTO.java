package com.app.positionback.domain.evaluation;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class EvaluationCorporationDTO {
    @EqualsAndHashCode.Include
    private Long evaluationId;
    private Long corporationReviewId;

    public EvaluationCorporationVO toVO() {
        return new EvaluationCorporationVO(evaluationId, corporationReviewId);
    }
}

