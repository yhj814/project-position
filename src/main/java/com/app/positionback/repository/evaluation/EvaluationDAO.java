package com.app.positionback.repository.evaluation;

import com.app.positionback.domain.evaluation.EvaluationVO;
import com.app.positionback.mapper.evaluation.EvaluationMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class EvaluationDAO {
    private final EvaluationMapper evaluationMapper;

    public void saveEvaluation(EvaluationVO evaluationVO) {
        evaluationMapper.insertEvaluation(evaluationVO);
    }

    public Long findLastInsertId(){
        return evaluationMapper.selectLastInsertId();
    }
}
