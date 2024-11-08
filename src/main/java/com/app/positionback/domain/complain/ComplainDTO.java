package com.app.positionback.domain.complain;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ComplainDTO {
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

    public ComplainVO toVO() {
        return new ComplainVO(id,complainTitle,complainContent,complainStatus,complainType,corporationId,memberId,createdDate, updatedDate);
    }
}
