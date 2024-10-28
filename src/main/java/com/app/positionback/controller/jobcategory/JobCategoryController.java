package com.app.positionback.controller.jobcategory;

import com.app.positionback.service.jobcategory.JobCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class JobCategoryController {
    private final JobCategoryService jobCategoryService;

    @GetMapping("/job-categories")
    public Map<String, Object> getJobCategories(Long categoryAId, Long categoryBId) {
        // 서비스 호출하여 카테고리 조회
        return jobCategoryService.getAllJobCategories(categoryAId, categoryBId);
    }
}
