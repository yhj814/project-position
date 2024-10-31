package com.app.positionback.domain.inquiry;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@ToString @EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class InquiryDTO {
    private Long id;
    private String inquiryType;
    private String inquiryCategory;
    private String inquiryTitle;
    private String inquiryContent;
    private String createDate;
    private String updateDate;
    private Long memberId;
    private String memberEmail;

    public InquiryVO toVO() {
        return new InquiryVO(id, inquiryType, inquiryCategory, inquiryTitle, inquiryContent, createDate, updateDate, memberId);
    }
}