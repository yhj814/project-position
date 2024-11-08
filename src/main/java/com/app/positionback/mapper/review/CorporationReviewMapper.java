package com.app.positionback.mapper.review;

import com.app.positionback.domain.review.CorporationReviewVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface CorporationReviewMapper {
    // 리뷰 정보 삽입
    public void insertCorporationReview(CorporationReviewVO corporationReviewVO);
    public Long selectLastInsertId();
    public Optional<CorporationReviewVO> selectByApplyId(Long applyId);
}
