package com.app.positionback.mapper.review;

import com.app.positionback.domain.review.CorporationReviewVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CorporationReviewMapper {
    // 리뷰 정보 삽입
    void insertCorporationReview(CorporationReviewVO corporationReviewVO);
    public Long selectLastInsertId();
}
