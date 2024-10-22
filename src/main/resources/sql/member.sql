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
    member_status int default 1,
    member_type varchar(255) default '포지셔너',
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp
);

select * from tbl_member;

alter table  tbl_member add(created_date datetime default current_timestamp);
alter table  tbl_member add(updated_date datetime default current_timestamp);