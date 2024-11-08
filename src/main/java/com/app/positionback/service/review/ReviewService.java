package com.app.positionback.service.review;

import com.app.positionback.domain.evaluation.EvaluationDTO;
import com.app.positionback.domain.evaluation.EvaluationVO;
import com.app.positionback.domain.review.CorporationReviewDTO;
import com.app.positionback.domain.review.CorporationReviewVO;
import com.app.positionback.domain.review.PositionReviewListDTO;

import java.util.List;

public interface ReviewService {
    List<PositionReviewListDTO> getPositionReviewList(Long positionerReviewId);
    public void addCorporationReview(CorporationReviewDTO corporationReviewDTO,  Long applyId);
}
