create table tbl_complain (
    id bigint unsigned auto_increment primary key,           # 기본 키
    complain_content text not null,                            # 신고 내용
    complain_count bigint unsigned default 1,                  # 누적 횟수
    complain_status varchar(255),                              # 상태
    corporation_id bigint unsigned not null,                     # 기업 외래 키
    member_id bigint unsigned not null,                      # 회원 외래 키
    created_date datetime default current_timestamp,         # 신고일
    updated_date datetime default  current_timestamp,
    constraint fk_complain_corporation foreign key (corporation_id)    # 기업 외래 키 제약 조건
        references tbl_corporation(id),
    constraint fk_complain_member foreign key (member_id)      # 회원 외래 키 제약 조건
        references tbl_member(id)
);


