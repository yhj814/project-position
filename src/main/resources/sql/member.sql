create database positionback;
use positionback;
create table tbl_member(
    id bigint unsigned auto_increment primary key,
    member_name varchar(255) not null,
    member_email varchar(255) not null,
    member_password varchar(255) not null,
    member_address varchar(255) not null,
    member_address_detail varchar(255) not null,
    member_nickname varchar(255) default '포지셔너',
    member_status varchar(255) default '활동중',
    member_type varchar(255) default '포지셔너',
    member_warning_count int default 0, # 신고 누적 횟수
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp
);

select * from tbl_member;
select * from tbl_corporation;
delete from tbl_member;

alter table  tbl_member add(created_date datetime default current_timestamp);
alter table  tbl_member add(updated_date datetime default current_timestamp);
alter table  tbl_member add(member_warning_count int default 0);
alter table tbl_member add(member_kakao_email varchar(255));
alter table tbl_member add(member_kakao_profile_url varchar(255));
alter table tbl_member modify column member_phone varchar(255);
alter table tbl_member modify column member_address_detail varchar(255);
alter table tbl_member modify column member_password varchar(255);
alter table tbl_member drop column member_type;




