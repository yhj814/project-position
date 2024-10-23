create table tbl_positioner_review (
    id bigint unsigned auto_increment primary key,           # 기본 키
    positioner_review_tips varchar(255),                     # 인턴십 tip
    notice_id bigint unsigned not null,                      # 공고 외래 키
    position_id bigint unsigned not null,                    # 포지션 외래 키
    evaluation_id bigint unsigned not null,                           # 평가 외래 키
    created_date datetime default current_timestamp,        # 생성일
    updated_date datetime default current_timestamp,        # 수정일
    constraint fk_positioner_review_notice foreign key (notice_id)    # 공고 외래 키 제약 조건
        references tbl_notice(id),
    constraint fk_positioner_review_position foreign key (position_id)   # 포지션 외래 키 제약 조건
        references tbl_position(id),
    constraint fk_positioner_review_evaluation foreign key (evaluation_id)  # 평가 외래 키 제약 조건
        references tbl_evaluation(id)
);


select *
from tbl_positioner_review;

ALTER TABLE tbl_inquiry
    MODIFY created_date DATETIME DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE tbl_positioner_review
    MODIFY updated_date DATETIME DEFAULT CURRENT_TIMESTAMP;