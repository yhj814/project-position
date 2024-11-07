package com.app.positionback.mapper.evaluation;

import com.app.positionback.domain.evaluation.EvaluationVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EvaluationMapper {
    // 평가 정보 삽입
    public void insertEvaluation(EvaluationVO evaluationVO);

    public Long selectLastInsertId();
}
