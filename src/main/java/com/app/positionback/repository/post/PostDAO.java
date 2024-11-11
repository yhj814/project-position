package com.app.positionback.repository.post;

import com.app.positionback.domain.post.PostDTO;
import com.app.positionback.domain.post.PostVO;
import com.app.positionback.mapper.post.PostMapper;
import com.app.positionback.utill.Pagination;
import com.app.positionback.utill.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class PostDAO {
    private final PostMapper postMapper;

    public void save(PostVO postVO) {
        postMapper.insert(postVO);
    }
    public Optional<PostDTO> findById(Long id) {
        return postMapper.selectById(id);
    }
    public List<PostDTO> findAll(Pagination pagination, Search search) {
        return postMapper.selectAll(pagination, search);
    }
    public List<PostDTO> findFilterAll(Pagination pagination, Search search) {
        return postMapper.selectFilterAll(pagination, search);
    }

    public int getTotalWithSearch(Search search){
        return postMapper.selectTotalWithSearch(search);
    }

    public int getTotalWithFilter(Search search, String filterType) {
        return postMapper.selectTotalWithFilter(search, filterType);
    }
    public int findCount(){
        return postMapper.selectCount();
    }
    public void update(PostVO postVO) {
        postMapper.update(postVO);
    }
    public void delete(Long id) {
        postMapper.delete(id);
    }

}
