create table tbl_position(
    id bigint unsigned auto_increment primary key ,
    member_id bigint unsigned not null,
    corporation_id bigint unsigned not null,
    notice_id bigint unsigned not null,
    position_status varchar(255) default '이수 예정',
#     member_id bigint unsigned not null,   평가id  필요
    constraint fk_position_member foreign key (member_id)
                         references tbl_member(id),
    constraint fk_position_corporation foreign key (corporation_id)
        references tbl_corporation(id),
    constraint fk_position_notice foreign key (notice_id)
        references tbl_notice(id)

);

select * from tbl_position;