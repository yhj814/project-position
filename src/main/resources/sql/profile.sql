create table tbl_profile(
    id bigint unsigned auto_increment primary key ,
    member_id bigint unsigned not null ,
    constraint fk_profile_file foreign key (id)
                        references tbl_file(id),
    constraint fk_profile_member foreign key (member_id)
                        references  tbl_member(id)
);

select * from tbl_profile;