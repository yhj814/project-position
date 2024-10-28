package com.app.positionback.service.jobcategory;

import com.app.positionback.domain.jobcategory.JobCategoryADTO;
import com.app.positionback.domain.jobcategory.JobCategoryBDTO;
import com.app.positionback.domain.jobcategory.JobCategoryCDTO;
import com.app.positionback.repository.jobcategory.JobCategoryDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Primary
@RequiredArgsConstructor
public class JobCategoryServiceImpl implements JobCategoryService {
    private final JobCategoryDAO jobCategoryDAO;

    @Override
    public List<JobCategoryADTO> findAllJobCategoryA() {
        return jobCategoryDAO.findAllJobCategoryA();
    }

    @Override
    public Map<String, List<String>> toMapOfCategoryB(Long categoryAId) {
        List<JobCategoryBDTO> categoriesB = jobCategoryDAO.findAllJobCategoryB(categoryAId);
        Map<String, List<String>> categoryBMap  = new HashMap<String, List<String>>();

        for (JobCategoryBDTO jobCategoryBDTO : categoriesB) {
            List<JobCategoryCDTO> categoriesC = jobCategoryDAO.findAllJobCategoryC(jobCategoryBDTO.getId());
            List<String> categoryNamesC = categoriesC.stream().map(JobCategoryCDTO::getJobCategoryCName).collect(Collectors.toList());
            categoryBMap.put(jobCategoryBDTO.getJobCategoryBName(), categoryNamesC);
        }
        return categoryBMap;
    }

}
