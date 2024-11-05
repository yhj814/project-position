package com.app.positionback.service.review;

import com.app.positionback.domain.review.PositionReviewListDTO;
import com.app.positionback.repository.review.PositionReviewDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    private final PositionReviewDAO positionReviewDAO;
    @Override
    public List<PositionReviewListDTO> getPositionReviewList(Long positionerReviewId) {
        return positionReviewDAO.findApplyReviewQuestion(positionerReviewId);
    }
}
