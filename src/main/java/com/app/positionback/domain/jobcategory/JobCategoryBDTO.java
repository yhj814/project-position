package com.app.positionback.domain.jobcategory;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class JobCategoryBDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String jobCategoryBName;
    private Long jobCategoryAId;

    public JobCategoryBVO toVO() {
        return new JobCategoryBVO(id, jobCategoryBName, jobCategoryAId);
    }
}
