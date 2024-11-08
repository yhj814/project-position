create table tbl_positioner_question(
    id bigint unsigned auto_increment primary key ,
    question_content varchar(500) not null,
    answer_content varchar(500) not null,
    positioner_review_id bigint unsigned not null,
    constraint tbl_positioner_question_review foreign key (positioner_review_id)
                                    references tbl_positioner_review(id)
);

select *
from tbl_positioner_question;

INSERT INTO tbl_positioner_question (question_content, answer_content, positioner_review_id)
VALUES
    ('What technology stack was used?', 'Java, Spring Boot, MySQL', 1),
    ('How long was the internship?', '3 months', 1);

