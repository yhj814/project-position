package com.app.positionback.domain.reply;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class ReplyDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private Long memberId;
    private Long postId;
    private String replyContent;
    private String createdDate;
    private String updatedDate;

    public ReplyVO toVO() {
        return new ReplyVO(id, memberId, postId, replyContent, createdDate, updatedDate);
    }
}
