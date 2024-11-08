package com.app.positionback.mapper.complain;

import com.app.positionback.domain.complain.ComplainVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ComplainMapper {
    public void insertComplain(ComplainVO complainVO);
    public void updateComplainStatus(ComplainVO complainVO);
}
