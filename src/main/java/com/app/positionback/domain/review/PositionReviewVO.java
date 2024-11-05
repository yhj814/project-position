package com.app.positionback.domain.review;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor
@NoArgsConstructor
public class PositionReviewVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String positionerReviewTips;
    private Long applyId;
    private String createdDate;
    private String updatedDate;
}
