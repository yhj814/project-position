create table  tbl_notice(
    id bigint unsigned auto_increment primary key,
    corporation_id bigint unsigned not null ,
    notice_title varchar(255) not null ,
    notice_career varchar(255) default '경력무관',
    notice_education varchar(255) not null, #최소 학력
    notice_work_start_date datetime not null , # 인턴십 시작일
    notice_work_end_date datetime not null , # 인턴십 종료일
    notice_work_start_time time not null , # 근무 시작시간
    notice_work_end_time time not null , # 근무 종료 시간
    notice_end_date datetime not null,  #공고 마감일
    notice_job_category_name VARCHAR(255), # 소카 내용(직무)
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp,
    constraint fk_notice_corporation foreign key (corporation_id)
                        references tbl_corporation(id)
);

select * from tbl_notice;

drop table tbl_notice;
ALTER TABLE TBL_NOTICE
    add COLUMN notice_job_category_name VARCHAR(255);

