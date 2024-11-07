package com.app.positionback.repository.evaluation;

import com.app.positionback.domain.evaluation.EvaluationCorporationDTO;
import com.app.positionback.domain.evaluation.EvaluationCorporationVO;
import com.app.positionback.mapper.evaluation.EvaluationCorporationMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class EvaluationCorporationDAO {
    private final EvaluationCorporationMapper evaluationCorporationMapper;

    public void saveEvaluationCorporation(EvaluationCorporationVO evaluationCorporationVO) {
        evaluationCorporationMapper.insertEvaluationCorporation(evaluationCorporationVO);
    }
}
