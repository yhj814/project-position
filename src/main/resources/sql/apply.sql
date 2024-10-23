
# 지원 테이블
create table tbl_apply(
        member_id bigint unsigned not null,
        corporation_id bigint unsigned not null,
        notice_id bigint unsigned not null,
        resume_id bigint unsigned not null,
        apply_type varchar(255) not null,  #지원 부문
        apply_status varchar(255) default '지원 완료',
#     member_id bigint unsigned not null,   평가id  필요
        constraint fk_apply_member foreign key (member_id)
            references tbl_member(id),
        constraint fk_apply_corporation foreign key (corporation_id)
            references tbl_corporation(id),
        constraint fk_apply_notice foreign key (notice_id)
            references tbl_notice(id),
        constraint fk_apply_resume foreign key (resume_id)
            references tbl_resume(id)
);

drop table  tbl_apply;

alter table  tbl_apply add(created_date datetime default current_timestamp);
alter table  tbl_apply add(updated_date datetime default current_timestamp);