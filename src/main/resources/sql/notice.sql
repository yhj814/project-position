create table  tbl_notice(
    id bigint unsigned auto_increment primary key,
    notice_title varchar(255) not null ,
    notice_career varchar(255) default '경력무관',
    notice_education varchar(255) not null, #최소 학력
    notice_work_date varchar(255) not null, #근무 일시
    notice_work_location VARCHAR(255), #근무 지역
    notice_start_date varchar(255) not null, #공고 시작일
    notice_end_date varchar(255) not null,  #공고 마감일
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp
);

select * from tbl_notice;
