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

alter table  tbl_member add(created_date datetime default current_timestamp);
alter table  tbl_member add(updated_date datetime default current_timestamp);
alter table  tbl_member add(member_warning_count int default 0);
alter table tbl_member add(member_phone varchar(255) not null);
alter table tbl_member modify column member_address varchar(255);
alter table tbl_member modify column member_address_detail varchar(255);
alter table tbl_member modify column member_password varchar(255);

insert into tbl_member (
    member_name,
    member_warning_count,
    member_phone,
    member_email,
    member_kakao_email,
    member_address,
    member_status,
    member_address_detail,
    member_type
) values (
          '김성수',
          '1',
          '010-9876-5432',
          'test@gmail.com',
          'null',
          '서울시 강남구',
          '활동중',
          '강남역 10번출구',
          '포지셔너'
         );













