package com.app.positionback.domain.post;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private String postTitle;
    private String postContent;
    private String postReadCount;
    private String createdDate;
    private String updatedDate;

    public PostVO toVO() {
        return new PostVO(id, memberId, postTitle, postContent, postReadCount, createdDate, updatedDate);
    }
}
