create table tbl_positioner_answer(
    id bigint unsigned auto_increment primary key ,
    question_id bigint unsigned not null ,
    constraint fk_positoner_answer_positioner_question foreign key (question_id)
                                  references tbl_positioner_question(id)
);

alter table tbl_positioner_answer add(answer_content varchar(500) not null);