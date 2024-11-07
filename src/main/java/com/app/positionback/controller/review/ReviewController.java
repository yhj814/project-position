package com.app.positionback.controller.review;

import com.app.positionback.domain.apply.ApplyDTO;
import com.app.positionback.domain.evaluation.EvaluationVO;
import com.app.positionback.domain.review.CorporationReviewDTO;
import com.app.positionback.service.apply.ApplyService;
import com.app.positionback.service.review.ReviewService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Date;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ReviewController {
    private final ReviewService reviewService;
    private final ApplyService applyService;

    @GetMapping("/corporation/position-review")
    public void goToPositionReview(CorporationReviewDTO corporationReviewDTO, EvaluationVO evaluationVO,
                                   Long id, Model model) {
        ApplyDTO applyDTO = applyService.getApplyById(id);
//        applyDTO.setNoticeWorkStartDate(String.valueOf(new Date()));
        model.addAttribute("apply", applyDTO);
    }

    @PostMapping("/corporation/position-review")
    public RedirectView createReview(CorporationReviewDTO corporationReviewDTO, EvaluationVO evaluationVO, Long applyId) {

        reviewService.addCorporationReview(corporationReviewDTO, evaluationVO, applyId);
        return new RedirectView("/corporation");
    }
}
