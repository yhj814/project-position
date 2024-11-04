package com.app.positionback.domain.complain;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class ComplainDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String complainContent;
    private int complainCount;
    private String complainStatus;
    private Long corporationId;
    private Long memberId;
    private String createdDate;
    private String updatedDate;

    public ComplainVO toVO() {
        return new ComplainVO(id, complainContent, complainCount, complainStatus, corporationId, memberId, createdDate, updatedDate);
    }
}
