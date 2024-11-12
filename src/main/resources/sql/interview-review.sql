create table tbl_interview_review (
    id bigint unsigned auto_increment primary key,           # 기본 키
    corporation_id bigint unsigned not null,                 # 기업 외래 키
    member_id bigint unsigned not null,                      # 회원 외래 키
    job_categoryA_id bigint unsigned not null ,              # 직무직업
    interview_date varchar(255) not null,                    # 면접 일자
    interview_method varchar(255),                           # 면접 진행 방식
    interview_tips varchar(255),                             # 면접 TIP 및 특이사항
    interview_passed varchar(255),                           # 합격 여부
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp,
    constraint fk_interview_review_corporation foreign key (corporation_id)  # 기업 외래 키 제약 조건
        references tbl_corporation(id),
    constraint fk_interview_review_member foreign key (member_id)    # 회원 외래 키 제약 조건
        references tbl_member(id),
    constraint fk_interview_review_job_categoryA foreign key (job_categoryA_id)
        references tbl_job_categoryA(id)
    );

select *
from tbl_interview_review;

