package com.app.positionback.domain.inquiry;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.member.MemberVO;
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

    public MemberVO toMemVO(){return new MemberVO(id,memberName,memberEmail,memberPassword,memberAddress,
            memberAddressDetail,memberNickname,memberStatus,memberType,memberWarningCount);} // 필요한 필드 설정

    public CorporationVO toCorpVO() {
        return new CorporationVO(id, corporationName, corporationAddress, corporationAddressDetail, corporationBusiness,
                corporationType, corporationSales, corporationOwner, corporationEmail, corporationPassword, corporationHomepage,
                corporationReadCount); // 필요한 필드 설정
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