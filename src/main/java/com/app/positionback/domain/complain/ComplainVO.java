package com.app.positionback.domain.complain;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class ComplainVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String complainTitle;
    private String complainContent;
    private String complainStatus;
    private String complainType;
    private Long corporationId;
    private Long memberId;
    private String createdDate;
    private String updatedDate;
}
