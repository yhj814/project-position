package com.app.positionback.repository.jobcategory;

import com.app.positionback.domain.jobcategory.JobCategoryADTO;
import com.app.positionback.domain.jobcategory.JobCategoryBDTO;
import com.app.positionback.domain.jobcategory.JobCategoryCDTO;
import com.app.positionback.mapper.jobcategory.JobCategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class JobCategoryDAO {
    private final JobCategoryMapper jobCategoryMapper;

    public List<JobCategoryADTO> findAllJobCategoryA() {
        return jobCategoryMapper.selectAllJobCategoryA();
    }

    public List<JobCategoryBDTO> findAllJobCategoryB(Long categoryAId) {
        return jobCategoryMapper.selectAllJobCategoryB(categoryAId);
    }

    public List<JobCategoryCDTO> findAllJobCategoryC(Long categoryBId) {
        return jobCategoryMapper.selectAllJobCategoryC(categoryBId);
    }

    public int findCountOfCategoryB(Long categoryAId) {
        return jobCategoryMapper.countJobCategoryB(categoryAId);
    }
}
