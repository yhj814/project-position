package com.app.positionback.repository.review;

import com.app.positionback.domain.review.CorporationReviewVO;
import com.app.positionback.mapper.review.CorporationReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CorporationReviewDAO {
    private CorporationReviewMapper corporationReviewMapper;

    public void saveCorporationReview(CorporationReviewVO corporationReviewVO) {
        corporationReviewMapper.insertCorporationReview(corporationReviewVO);
    }
    public Long findLastInsertId(){
        return corporationReviewMapper.selectLastInsertId();
    }

}
