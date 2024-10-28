package com.app.positionback.service.jobcategory;


import com.app.positionback.domain.jobcategory.JobCategoryADTO;

import java.util.List;
import java.util.Map;

public interface JobCategoryService {
    List<JobCategoryADTO> findAllJobCategoryA();
    Map<String, List<String>> toMapOfCategoryB(Long categoryAId);
}
