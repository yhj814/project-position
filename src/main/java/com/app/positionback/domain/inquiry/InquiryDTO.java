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
    private String memberName;
    private String memberEmail;
    private String memberPassword;
    private String memberAddress;
    private String memberAddressDetail;
    private String memberNickname;
    private String memberStatus;
    private String memberType;
    private int memberWaringCount;

    public InquiryVO toVO() {
        return new InquiryVO(id, inquiryType, inquiryCategory, inquiryTitle, inquiryContent, createDate, updateDate, memberId);
    }
}

//member_name varchar(255) not null,
//member_email varchar(255) not null,
//member_password varchar(255) not null,
//member_address varchar(255) not null,
//member_address_detail varchar(255) not null,
//member_nickname varchar(255) default '포지셔너',
//member_status int default 1,
//member_type varchar(255) default '포지셔너',
//member_warning_count int default 0, # 신고 누적 횟수