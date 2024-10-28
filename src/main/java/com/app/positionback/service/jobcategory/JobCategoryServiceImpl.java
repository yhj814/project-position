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

@Service
@Primary
@RequiredArgsConstructor
public class JobCategoryServiceImpl implements JobCategoryService {
    private final JobCategoryDAO jobCategoryDAO;

    @Override
    public Map<String, Object> getAllJobCategories(Long categoryAId, Long categoryBId) {
        Map<String, Object> resultMap = new HashMap<>();

        // 대카 조회
        List<JobCategoryADTO> jobCategoryAList = jobCategoryDAO.findAllJobCategoryA();
        resultMap.put("jobCategoryA", jobCategoryAList);

        // 중카 조회 (대카 ID로 필터링)
        if (categoryAId != null) {
            List<JobCategoryBDTO> jobCategoryBList = jobCategoryDAO.findAllJobCategoryB(categoryAId);
            resultMap.put("jobCategoryB", jobCategoryBList);
        }

        // 소카 조회 (중카 ID로 필터링)
        if (categoryBId != null) {
            List<JobCategoryCDTO> jobCategoryCList = jobCategoryDAO.findAllJobCategoryC(categoryBId);
            resultMap.put("jobCategoryC", jobCategoryCList);
        }

        return resultMap;
    }
}
