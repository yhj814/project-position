package com.app.positionback.domain.jobcategory;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class JobCategoryCDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String jobCategoryCName;
    private Long jobCategoryBId;

    public JobCategoryCVO toVO(){
        return new JobCategoryCVO(id, jobCategoryCName, jobCategoryBId);
    }
}
