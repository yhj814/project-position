package com.app.positionback.service.review;

import com.app.positionback.domain.evaluation.EvaluationCorporationDTO;
import com.app.positionback.domain.evaluation.EvaluationCorporationVO;
import com.app.positionback.domain.evaluation.EvaluationVO;
import com.app.positionback.domain.review.CorporationReviewDTO;
import com.app.positionback.domain.review.CorporationReviewVO;
import com.app.positionback.domain.review.PositionReviewListDTO;
import com.app.positionback.repository.evaluation.EvaluationCorporationDAO;
import com.app.positionback.repository.evaluation.EvaluationDAO;
import com.app.positionback.repository.review.CorporationReviewDAO;
import com.app.positionback.repository.review.PositionReviewDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    private final PositionReviewDAO positionReviewDAO;
    private final EvaluationDAO evaluationDAO;
    private final CorporationReviewDAO corporationReviewDAO;
    private final EvaluationCorporationDAO evaluationCorporationDAO;
    private final EvaluationCorporationVO evaluationCorporationVO;

    @Override
    public List<PositionReviewListDTO> getPositionReviewList(Long positionerReviewId) {
        return positionReviewDAO.findApplyReviewQuestion(positionerReviewId);
    }

    @Override
    public void addCorporationReview(CorporationReviewDTO corporationReviewDTO, EvaluationVO evaluationVO, Long applyId) {
        EvaluationCorporationDTO evaluationCorporationDTO = new EvaluationCorporationDTO();
        // 평가 정보 삽입
        evaluationDAO.saveEvaluation(evaluationVO);
        evaluationCorporationDTO.setEvaluationId(evaluationDAO.findLastInsertId());

        // 리뷰 정보 삽입
        corporationReviewDTO.setApplyId(applyId);
        corporationReviewDAO.saveCorporationReview(corporationReviewDTO.toVO());
        evaluationCorporationDTO.setCorporationReviewId(corporationReviewDAO.findLastInsertId());

        // 평가-리뷰 관계 삽입
        evaluationCorporationDAO.saveEvaluationCorporation(evaluationCorporationDTO.toVO());
    }
}
