package com.app.positionback.domain.position;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class PositionVO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private Long noticeId;
    private String positionStatus = "이수 예정";

    public PositionVO toVO() {
        return new PositionVO(id, memberId, noticeId, positionStatus);
    }
}

