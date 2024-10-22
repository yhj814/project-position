create table tbl_apply(
        member_id bigint unsigned not null,
        corporation_id bigint unsigned not null,
        notice_id bigint unsigned not null,
#     이력서 fk 받아야 됨
        apply_type varchar(255) not null,  #지원 부문
        apply_status varchar(255) default '지원 완료',
#     member_id bigint unsigned not null,   평가id  필요
        constraint fk_apply_member foreign key (member_id)
            references tbl_member(id),
        constraint fk_apply_corporation foreign key (corporation_id)
            references tbl_corporation(id),
        constraint fk_apply_notice foreign key (notice_id)
            references tbl_notice(id)
);
