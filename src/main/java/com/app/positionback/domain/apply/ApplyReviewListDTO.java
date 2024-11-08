package com.app.positionback.domain.apply;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Setter
@Getter
@ToString
public class ApplyReviewListDTO {
    private String questionContent;
    private String answerContent;
}
