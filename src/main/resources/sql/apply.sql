# 지원 테이블
create table tbl_apply(
        notice_id bigint unsigned not null,
        resume_id bigint unsigned not null ,
        apply_type varchar(255) not null,  #지원 부문
        apply_status varchar(255) default '지원 완료',
        constraint fk_apply_notice foreign key (notice_id)
            references tbl_notice(id),
        constraint fk_apply_resume foreign key (resume_id)
            references tbl_resume(id)
);
select *
from tbl_apply;

