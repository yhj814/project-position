package com.app.positionback.mapper.review;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.domain.review.PositionReviewDTO;
import com.app.positionback.utill.Pagination;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface PositionReviewMapper {
    public List<PositionReviewDTO> selectPositionReviewByCorporationId(@Param("pagination") Pagination pagination, Long corporationId);
}
