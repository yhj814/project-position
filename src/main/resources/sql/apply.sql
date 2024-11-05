# 지원 테이블
create table tbl_apply(
        id bigint unsigned auto_increment primary key,
        notice_id bigint unsigned not null,
        resume_id bigint unsigned not null ,
        apply_type varchar(255) not null,  #지원 부문
        apply_status varchar(255) default '지원 완료',
        constraint fk_apply_notice foreign key (notice_id)
            references tbl_notice(id),
        constraint fk_apply_resume foreign key (resume_id)
            references tbl_resume(id)
);
select *
from tbl_apply;

use positionback;

INSERT INTO tbl_apply (
    notice_id,
    resume_id,
    apply_type,
    apply_status
) VALUES (
             97,                    -- notice_id (tbl_notice 테이블의 공고 ID)
             3,                    -- resume_id (tbl_resume 테이블의 이력서 ID)
             '프론트엔드 개발자',   -- apply_type (지원 부문)
             '지원 완료'            -- apply_status (기본값이 '지원 완료'이므로 생략 가능)
         );

ALTER TABLE tbl_apply
    ADD COLUMN id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY;

create view view_apply_list as
select
    c.corporation_name,
    n.notice_title,
    m.member_name,
    m.member_email,
    m.member_nickname,
    a.id as apply_id,
    a.apply_type,
    a.apply_status,
    n.notice_career,
    n.notice_education,
    n.notice_work_start_date,
    n.notice_work_end_date,
    n.notice_work_start_time,
    n.notice_work_end_time,
    n.notice_end_date,
    n.notice_job_category_name,
    pr.id as positioner_review_id,
    pr.positioner_review_tips,
    pr.created_date as review_created_date,
    pr.updated_date as review_updated_date,
    e.evaluation_overall,
    e.evaluation_difficulty,
    e.evaluation_result,
    pq.question_content,
    pq.answer_content
from
    tbl_apply a
        join
    tbl_notice n on a.notice_id = n.id
        join
    tbl_corporation c on n.corporation_id = c.id
        join
    tbl_resume r on a.resume_id = r.id
        join
    tbl_member m on r.member_id = m.id
        left join
    tbl_positioner_review pr on pr.apply_id = a.id
        left join
    tbl_evaluation_positioner ep on pr.id = ep.positioner_review_id
        left join
    tbl_evaluation e on ep.id = e.id
        left join
    tbl_positioner_question pq on pr.id = pq.positioner_review_id;
