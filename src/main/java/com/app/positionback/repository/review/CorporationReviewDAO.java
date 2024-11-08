package com.app.positionback.repository.review;

import com.app.positionback.domain.review.CorporationReviewVO;
import com.app.positionback.mapper.review.CorporationReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CorporationReviewDAO {
    private final CorporationReviewMapper corporationReviewMapper;

    public void saveCorporationReview(CorporationReviewVO corporationReviewVO) {
        corporationReviewMapper.insertCorporationReview(corporationReviewVO);
    }
    public Long findLastInsertId(){
        return corporationReviewMapper.selectLastInsertId();
    }

    public Optional<CorporationReviewVO> getCorporationReviewByApplyId(Long applyId) {
        return corporationReviewMapper.selectByApplyId(applyId);
    }
}
