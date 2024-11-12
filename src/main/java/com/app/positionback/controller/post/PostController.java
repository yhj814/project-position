package com.app.positionback.controller.post;

import com.app.positionback.domain.post.PostDTO;
import com.app.positionback.service.post.PostService;
import com.app.positionback.utill.Pagination;
import com.app.positionback.utill.Search;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/community/*")
@RequiredArgsConstructor
@Slf4j
public class PostController {
    private final PostService postService;

    @GetMapping("/community-post-list")
    public List<PostDTO> communityPostList(Pagination pagination, Search search) {
        return postService.getList(pagination, search);
    }
}



