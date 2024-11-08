package com.app.positionback.domain.evaluation;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class EvaluationDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String evaluationOverall;
    private String evaluationDifficulty;
    private String evaluationResult;

    public EvaluationVO toVO(){
        return new EvaluationVO(id, evaluationOverall, evaluationDifficulty, evaluationResult);
    }
}
