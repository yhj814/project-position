package com.app.positionback.domain.review;

import com.app.positionback.utill.Pagination;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@ToString
public class PositionReviewListDTO {
    private String questionContent;
    private String answerContent;
//    private List<PositionReviewDTO> positionReviews;
//    private Pagination pagination;
}
