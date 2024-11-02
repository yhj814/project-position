create table tbl_inquiry (
    id bigint unsigned auto_increment primary key,           # 기본 키
    inquiry_type varchar(255) not null,                     # 구분 (기업, 개인)
    inquiry_category varchar(255),                           # 문의 종류
    inquiry_title varchar(255) not null,                    # 제목
    inquiry_content varchar(255) not null,                     # 내용
    inquiry_attachment varchar(255),                         # 파일 첨부
    member_id bigint unsigned not null,                      # 회원 외래 키
    constraint fk_inquiry_member foreign key (member_id)    # 회원 외래 키 제약 조건
        references tbl_member(id),
    created_date datetime default current_timestamp,        # 생성일
    updated_date datetime default current_timestamp         # 수정일
);

select *
from tbl_inquiry;

use test;

ALTER TABLE tbl_inquiry
    MODIFY created_date DATETIME DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE tbl_inquiry
    MODIFY updated_date DATETIME DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE tbl_inquiry
    MODIFY inquiry_content VARCHAR(255) NOT NULL;

ALTER TABLE tbl_inquiry DROP COLUMN inquiry_attachment;

alter table tbl_inquiry add column inquiry_attachment varchar(255);

alter table tbl_inquiry drop column inquiry_attachment;

alter table tbl_inquiry add column member_email varchar(255);
alter table tbl_inquiry add column memebr_kakao_email varchar(255);
alter table tbl_inquiry drop column memebr_kakao_email;
alter table tbl_inquiry add column member_kakao_email varchar(255);

# insert into tbl_inquiry (
#     inquiry_type,
#     inquiry_category,
#     inquiry_title,
#     inquiry_content,
#     member_id,
#     member_email,
#     member_kakao_email
# ) values ('기업',
#           '제안사항',
#           '제안 사항이 있어요',
#           '포지션 관련 제안해요',
#           4,
#           null,
#           'koreait@kakao.com');






                                                                                                                                      )


