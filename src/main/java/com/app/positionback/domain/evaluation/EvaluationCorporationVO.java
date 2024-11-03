package com.app.positionback.domain.evaluation;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class EvaluationCorporationVO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long corporationId;
}

//id bigint unsigned auto_increment primary key,  # 기본 키
//    corporation_id bigint unsigned not null ,