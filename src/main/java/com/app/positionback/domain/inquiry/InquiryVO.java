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



//id bigint unsigned auto_increment primary key,           # 기본 키
//inquiry_type varchar(255) not null,                     # 구분 (기업, 개인)
//inquiry_category varchar(255),                           # 문의 종류
//inquiry_title varchar(255) not null,                    # 제목
//inquiry_content varchar(255) not null,                     # 내용
//inquiry_attachment varchar(255),                         # 파일 첨부
//member_id bigint unsigned not null,                      # 회원 외래 키
//constraint fk_inquiry_member foreign key (member_id)    # 회원 외래 키 제약 조건
//references tbl_member(id),
//created_date datetime default current_timestamp,        # 생성일
//updated_date datetime default current_timestamp         # 수정일
//);
//
//select *
//from tbl_inquiry;
//
//ALTER TABLE tbl_inquiry
//MODIFY created_date DATETIME DEFAULT CURRENT_TIMESTAMP;
//
//ALTER TABLE tbl_inquiry
//MODIFY updated_date DATETIME DEFAULT CURRENT_TIMESTAMP;
//
//ALTER TABLE tbl_inquiry
//MODIFY inquiry_content VARCHAR(255) NOT NULL;