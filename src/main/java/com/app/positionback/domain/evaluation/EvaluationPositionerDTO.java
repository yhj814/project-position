package com.app.positionback.domain.evaluation;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class EvaluationPositionerDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;

    public EvaluationPositionerVO toVO() {
        return new EvaluationPositionerVO(id, memberId);
    }
}
