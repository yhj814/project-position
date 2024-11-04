package com.app.positionback.domain.position;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class PositionDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private Long noticeId;
    private String positionStatus;
}
