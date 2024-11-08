package com.app.positionback.domain.evaluation;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class EvaluationCorporationVO {
    @EqualsAndHashCode.Include
    private Long evaluationId;
    private Long corporationReviewId;
}

