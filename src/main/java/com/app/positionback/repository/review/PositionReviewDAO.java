package com.app.positionback.repository.review;

import com.app.positionback.domain.review.PositionReviewListDTO;
import com.app.positionback.mapper.review.PositionReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PositionReviewDAO {
    private final PositionReviewMapper positionReviewMapper;

    public List<PositionReviewListDTO> findApplyReviewQuestion(Long positionerReviewId){
        return positionReviewMapper.selectApplyReviewQuestion(positionerReviewId);
    };
}
