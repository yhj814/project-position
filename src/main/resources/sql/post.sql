create table tbl_post (
    id bigint unsigned auto_increment primary key,
    member_id bigint unsigned not null,
    post_title varchar(255) not null,
    post_content varchar(255) not null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp,
    post_read_count bigint unsigned default 0,
    constraint fk_post_member foreign key (member_id)
        references tbl_member(id)
);


show databases ;

use test;

create database test;

