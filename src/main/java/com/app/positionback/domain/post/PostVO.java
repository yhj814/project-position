package com.app.positionback.domain.post;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class PostVO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private String postTitle;
    private String postContent;
    private String postReadCount;
    private String createdDate;
    private String updatedDate;

    public PostDTO toDTO(){
        PostDTO postDTO = new PostDTO();
        postDTO.setId(id);
        postDTO.setMemberId(memberId);
        postDTO.setPostTitle(postTitle);
        postDTO.setPostContent(postContent);
        postDTO.setPostReadCount(postReadCount);
        postDTO.setCreatedDate(createdDate);
        postDTO.setUpdatedDate(updatedDate);
        return postDTO;

    }
}
