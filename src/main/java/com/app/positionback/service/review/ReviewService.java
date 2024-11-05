package com.app.positionback.service.review;

import com.app.positionback.domain.review.PositionReviewListDTO;

import java.util.List;

public interface ReviewService {
    List<PositionReviewListDTO> getPositionReviewList(Long positionerReviewId);
}
