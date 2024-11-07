package com.app.positionback.domain.apply;


import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor
@NoArgsConstructor
public class ApplyVO {
    @EqualsAndHashCode.Include
    private Long applyId;
    private Long noticeId;
    private Long resumeId;
    private String applyType;
    private String applyStatus;
    private String createdDate;
    private String updatedDate;
}
