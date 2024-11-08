create table tbl_complain (
    id bigint unsigned auto_increment primary key,           # 기본 키
    complain_title varchar(255) not null,
    complain_content varchar(255) not null,                  # 신고 내용
    complain_status varchar(255) default '신고 대기',                              # 상태
    complain_type varchar(255) not null,                #문의 종류
    corporation_id bigint unsigned not null,                     # 기업 외래 키
    member_id bigint unsigned not null,                      # 회원 외래 키
    created_date datetime default current_timestamp,         # 신고일
    updated_date datetime default  current_timestamp,
    constraint fk_complain_corporation foreign key (corporation_id)    # 기업 외래 키 제약 조건
        references tbl_corporation(id),
    constraint fk_complain_member foreign key (member_id)      # 회원 외래 키 제약 조건
        references tbl_member(id)
);

select *
from tbl_complain;


alter table tbl_complain add column complain_type varchar(255) not null;

ALTER TABLE tbl_complain
    MODIFY complain_status VARCHAR(255) DEFAULT '신고 대기';
