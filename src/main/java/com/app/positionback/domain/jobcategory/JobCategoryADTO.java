package com.app.positionback.domain.jobcategory;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class JobCategoryADTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String jobCategoryAName;

    public JobCategoryAVO toVO() {
        return new JobCategoryAVO(id, jobCategoryAName);
    }
}
