create table tbl_evaluation_corporation (
    id bigint unsigned auto_increment primary key,  # 기본 키
    corporation_id bigint unsigned not null ,
    constraint fk_evaluation_corporation_evaluation foreign key(id)
          references tbl_evaluation(id),
    constraint  fk_evaluation_corporation_corporation foreign key (corporation_id)
                                        references  tbl_corporation(id)
);

drop table tbl_evaluation_corporation;
select * from tbl_evaluation_corporation;
