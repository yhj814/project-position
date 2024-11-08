package com.app.positionback.domain.review;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class CorporationReviewVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String reviewContent;
    private String reviewTips;
    private Long applyId;
    private String createdDate;
    private String updatedDate;

}