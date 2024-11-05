package com.app.positionback.mapper.review;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.domain.review.PositionReviewListDTO;
import com.app.positionback.utill.Pagination;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PositionReviewMapper {
//    public List<PositionReviewDTO> selectPositionReviewByCorporationId(@Param("pagination") Pagination pagination, Long corporationId);
    public List<PositionReviewListDTO> selectApplyReviewQuestion(Long positionerReviewId);
}

