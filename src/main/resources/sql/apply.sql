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