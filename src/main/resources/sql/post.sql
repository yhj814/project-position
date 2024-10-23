create table tbl_post (
    id bigint unsigned auto_increment primary key,           # 기본 키
    member_id bigint unsigned not null,                      # 회원 외래 키
    post_title varchar(255) not null,                       # 제목
    post_content varchar(255) not null,                      # 내용
    created_date datetime default current_timestamp,        # 작성일
    updated_date datetime default current_timestamp,  # 수정일
    post_read_count bigint unsigned default 0,              # 조회수
    constraint fk_post_member foreign key (member_id)       # 회원 외래 키 제약 조건
        references tbl_member(id)
);


