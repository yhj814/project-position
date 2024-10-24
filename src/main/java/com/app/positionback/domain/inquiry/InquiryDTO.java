package com.app.positionback.domain.inquiry;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@ToString @EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class InquiryDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String type;
    private String category;
    private String title;
    private String content;

    public InquiryVO toVO() {
        return new InquiryVO(id, type, category, title, content);
    }
}
