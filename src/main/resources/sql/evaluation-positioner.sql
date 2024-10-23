create table tbl_evaluation_positioner (
    id bigint unsigned auto_increment primary key,  # 기본 키
    member_id bigint unsigned not null ,
    constraint fk_evaluation_positioner_evaluation foreign key(id)
          references tbl_evaluation(id),
    constraint fk_evaluation_positioner_member foreign key(member_id)
        references tbl_member(id)
);
select * from tbl_evaluation_positioner;
