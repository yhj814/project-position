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
    public Map<String, Map<String, List<String>>> toMapOfCategoryB(Long categoryAId) {
        // 1. 대카(A)의 정보 가져오기
        JobCategoryADTO categoryA = jobCategoryDAO.findJobCategoryAById(categoryAId);
        // 2. 중카(B)의 리스트 가져오기
        List<JobCategoryBDTO> categoriesB = jobCategoryDAO.findAllJobCategoryB(categoryAId);
        // 3. 최종 맵 생성 (대카(A) 이름을 키로, 중카-소카 매핑을 값으로)
        Map<String, Map<String, List<String>>> resultMap = new HashMap<>();

        // 4. 중카(B)와 소카(C) 매핑
        Map<String, List<String>> categoryBMap  = new HashMap<String, List<String>>();
        for (JobCategoryBDTO jobCategoryBDTO : categoriesB) {
            List<JobCategoryCDTO> categoriesC = jobCategoryDAO.findAllJobCategoryC(jobCategoryBDTO.getId());
            List<String> categoryNamesC = categoriesC.stream().map(JobCategoryCDTO::getJobCategoryCName).collect(Collectors.toList());
            categoryBMap.put(jobCategoryBDTO.getJobCategoryBName(), categoryNamesC);
        }
        resultMap.put(categoryA.getJobCategoryAName(), categoryBMap);

        return resultMap;
    }

}
