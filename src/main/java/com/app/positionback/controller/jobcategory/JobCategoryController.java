package com.app.positionback.controller.jobcategory;

import com.app.positionback.domain.jobcategory.JobCategoryADTO;
import com.app.positionback.service.jobcategory.JobCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/jobcategories")
@RequiredArgsConstructor
public class JobCategoryController {
    private final JobCategoryService jobCategoryService;

    @GetMapping("/categoryA")
    public List<JobCategoryADTO> getAllJobCategoryA() {
        return jobCategoryService.findAllJobCategoryA();
    }

    @GetMapping("/categoryB/{categoryAId}")
    public Map<String, Map<String, List<String>>> getCategoryB(@PathVariable("categoryAId") Long categoryAId) {
        return jobCategoryService.toMapOfCategoryB(categoryAId);
    }
}
