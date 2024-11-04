package com.app.positionback.domain.notice;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Setter
@Getter
@ToString
public class NoticeCategoryRankDTO {
    private String noticeJobCategoryName;
    private int count;
}
