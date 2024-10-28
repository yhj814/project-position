package com.app.positionback.jobcategory;
import com.app.positionback.domain.jobcategory.JobCategoryADTO;
import com.app.positionback.domain.jobcategory.JobCategoryBDTO;
import com.app.positionback.domain.jobcategory.JobCategoryCDTO;
import com.app.positionback.repository.jobcategory.JobCategoryDAO;
import com.app.positionback.service.jobcategory.JobCategoryService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

@SpringBootTest
@Slf4j
class JobCategoryServiceImplTest {

    @Autowired
    private JobCategoryService jobCategoryService;

    @Test
    void testFindAllJobCategoryA() {
        List<JobCategoryADTO> result = jobCategoryService.findAllJobCategoryA();
        log.info("Job Categories A: {}", result);
    }

    @Test
    void testToMapOfCategoryB() {
        Long categoryAId = 1L;
        Map<String, List<String>> result = jobCategoryService.toMapOfCategoryB(categoryAId);
        log.info("Map of Category B: {}", result);
    }
}

