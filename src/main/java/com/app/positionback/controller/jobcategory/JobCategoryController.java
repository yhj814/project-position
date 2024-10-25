package com.app.positionback.controller.jobcategory;

import com.app.positionback.service.jobcategory.JobCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class JobCategoryController {
    private final JobCategoryService jobCategoryService;

    @GetMapping("/job-categories")
    public ResponseEntity<Map<String, Object>> getJobCategories(Long categoryAId, Long categoryBId) {
        Map<String, Object> result = jobCategoryService.getAllJobCategories(categoryAId, categoryBId);
        return ResponseEntity.ok(result);
    }
}
