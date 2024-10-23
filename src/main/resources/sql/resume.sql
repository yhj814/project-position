# 이력서 테이블
create table tbl_resume(
    id bigint unsigned auto_increment primary key ,
    member_id bigint unsigned not null,
    education_id bigint unsigned not null,
    job_categoryC_id bigint unsigned not null,#스킬
    constraint fk_resume_member foreign key (member_id)
                       references tbl_member(id),
    constraint fk_resume_education foreign key (education_id)
        references tbl_education(id),
    constraint fk_resume_job_categoryC foreign key (job_categoryC_id)
        references tbl_job_categoryC(id)
);

select * from tbl_resume;