create table tbl_interview_review_question (
    id bigint unsigned auto_increment primary key,         # 기본 키
    question_content varchar(255) not null,                # 질문 내용
    interview_review_id bigint unsigned not null,          # 면접 후기 외래 키
    constraint fk_interview_review_question_review foreign key (interview_review_id)  # 면접 후기 외래 키 제약 조건
        references tbl_interview_review(id)
);

select *from tbl_interview_review_question;
