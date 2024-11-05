package com.app.positionback.domain.review;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class PositionReviewDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String positionerReviewTips;
    private Long applyId;
    private String createdDate;
    private String updatedDate;

    private String memberName;
    private String noticeJobCategoryName;
    private String noticeTitle;
    private String applyType;
    private String applyStatus;
    private String evaluationOverall;
    private String evaluationDifficulty;
    private String evaluationResult;

    public PositionReviewVO toVO() {
        return new PositionReviewVO(id,positionerReviewTips,applyId,createdDate,updatedDate);
    }
}
