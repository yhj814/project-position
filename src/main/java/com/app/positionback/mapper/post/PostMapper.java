package com.app.positionback.mapper.post;

import com.app.positionback.domain.post.PostDTO;
import com.app.positionback.domain.post.PostVO;
import com.app.positionback.utill.Pagination;
import com.app.positionback.utill.Search;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface PostMapper {

    public void insert (PostVO postVO);

    public Optional<PostDTO> selectById(Long id);

    public List<PostDTO> selectAll(@Param("pagination") Pagination pagination, @Param("search")Search search);

    public List<PostDTO> selectFilterAll(@Param("pagination") Pagination pagination, @Param("search")Search search);

    public int selectTotalWithSearch(@Param("search") Search search);
    public int selectTotalWithFilter(@Param("search") Search search, @Param("filterType") String filterType);


    public int selectCount();

    public void update(PostVO postVO);

    public void delete(Long id);

}
