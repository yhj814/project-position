package com.app.positionback.mapper.evaluation;

import com.app.positionback.domain.evaluation.EvaluationCorporationVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EvaluationCorporationMapper {
    // 평가-리뷰 관계 삽입
    public void insertEvaluationCorporation(EvaluationCorporationVO evaluationCorporationVO);
}
