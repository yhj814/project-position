package com.app.positionback.domain.jobcategory;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class JobCategoryBVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String jobCategoryBName;
    private Long jobCategoryAId;
}