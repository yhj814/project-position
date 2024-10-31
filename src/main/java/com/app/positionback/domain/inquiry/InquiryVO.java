package com.app.positionback.domain.inquiry;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @ToString @EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class InquiryVO {
    private Long id;
    private String inquiryType;
    private String inquiryCategory;
    private String inquiryTitle;
    private String inquiryContent;
    private String createDate;
    private String updateDate;
    private Long memberId;
}