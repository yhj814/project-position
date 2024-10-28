package com.app.positionback.mapper.jobcategory;

import com.app.positionback.domain.jobcategory.JobCategoryADTO;
import com.app.positionback.domain.jobcategory.JobCategoryBDTO;
import com.app.positionback.domain.jobcategory.JobCategoryCDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JobCategoryMapper {

    // 대카 조회 메서드
    List<JobCategoryADTO> selectAllJobCategoryA();

    // 중카 조회 메서드 (대카 ID로 필터링)
    List<JobCategoryBDTO> selectAllJobCategoryB(Long categoryAId);

    // 소카 조회 메서드 (중카 ID로 필터링)
    List<JobCategoryCDTO> selectAllJobCategoryC(Long categoryBId);
}
