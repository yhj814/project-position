package com.app.positionback.service.post;

import com.app.positionback.domain.post.PostDTO;
import com.app.positionback.domain.post.PostVO;
import com.app.positionback.repository.post.PostDAO;
import com.app.positionback.utill.Pagination;
import com.app.positionback.utill.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostDAO postDAO;

    @Override
    public void write(PostVO postVO) {
        postDAO.save(postVO);
    }

    @Override
    public List<PostDTO> getList(Pagination pagination, Search search) {
        return postDAO.findAll(pagination, search);
    }

    @Override
    public List<PostDTO> getFilterList(Pagination pagination, Search search) {
        return postDAO.findFilterAll(pagination, search);
    }

    @Override
    public Optional<PostDTO> getById(Long id) {
        return postDAO.findById(id);
    }

    @Override
    public void update(PostVO postVO) {
        postDAO.update(postVO);
    }

    @Override
    public void delete(Long id) {
        postDAO.delete(id);
    }

    @Override
    public int getTotal() {
        return postDAO.findCount();
    }

    @Override
    public int getTotalWithSearch(Search search) {
        return postDAO.getTotalWithSearch(search);
    }
    @Override
    public int getTotalWithFilter(Search search, String filterType) {
        return postDAO.getTotalWithFilter(search, filterType);
    }
}
