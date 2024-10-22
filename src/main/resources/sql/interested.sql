create table tbl_interested(
    id bigint unsigned auto_increment primary key ,
    member_id bigint unsigned not null ,
    corporation_id bigint unsigned not null ,
    constraint  fk_interested_member foreign key (member_id)
         references tbl_member(id),
    constraint  fk_interested_corporation foreign key (corporation_id)
        references tbl_corporation(id)
);

select * from tbl_interested;