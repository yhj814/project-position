package com.app.positionback.service.post;

import com.app.positionback.domain.post.PostDTO;
import com.app.positionback.domain.post.PostVO;
import com.app.positionback.utill.Pagination;
import com.app.positionback.utill.Search;

import java.util.List;
import java.util.Optional;

public interface PostService {
    public void write(PostVO postVO);

    public List<PostDTO> getList(Pagination pagination, Search search);
    public List<PostDTO> getFilterList(Pagination pagination, Search search);

    public Optional<PostDTO> getById(Long id);

    public void update(PostVO postVO);
    public void delete(Long id);

    public int getTotal();
    public int getTotalWithSearch(Search search);
    public int getTotalWithFilter(Search search,String filterType);


}
