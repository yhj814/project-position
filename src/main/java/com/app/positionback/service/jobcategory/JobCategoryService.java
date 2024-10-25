package com.app.positionback.service.jobcategory;

import java.util.Map;

public interface JobCategoryService {
    Map<String, Object> getAllJobCategories(Long categoryAId, Long categoryBId);
}
