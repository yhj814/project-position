package com.app.positionback.domain.evaluation;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class EvaluationVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String evaluationOverall;
    private String evaluationDifficulty;
    private String evaluationResult;
}
