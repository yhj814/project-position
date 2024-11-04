package com.app.positionback.domain.evaluation;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class EvaluationCorporationDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long corporationId;

    public EvaluationCorporationVO toVO() {
        return new EvaluationCorporationVO(id, corporationId);
    }
}
