create table  tbl_notice(
    id bigint unsigned auto_increment primary key,
    corporation_id bigint unsigned not null ,
    job_categoryC_id bigint unsigned not null,
    notice_title varchar(255) not null ,
    notice_career varchar(255) default '경력무관',
    notice_education varchar(255) not null, #최소 학력
    notice_work_date datetime not null, #근무 일시
    notice_end_date varchar(255) not null,  #공고 마감일
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp,
    constraint fk_notice_corporation foreign key (corporation_id)
                        references tbl_corporation(id),
    constraint fk_notice_job_categoryA foreign key (job_categoryC_id)
                        references tbl_job_categoryC(id)
);

select * from tbl_notice;

