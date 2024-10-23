create table tbl_evaluation_interview (
    id bigint unsigned auto_increment primary key,  # 기본 키
    interview_review_id bigint unsigned not null ,
    constraint fk_evaluation_interview_evaluation foreign key(id)
          references tbl_evaluation(id),
    constraint  fk_evaluation_interview_interview_review foreign key (interview_review_id)
        references  tbl_interview_review(id)
);
select * from tbl_evaluation_interview;

