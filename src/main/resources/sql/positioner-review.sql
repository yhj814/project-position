create table tbl_positioner_review (
    id bigint unsigned auto_increment primary key,           # 기본 키
    positioner_review_tips varchar(255),                     # 인턴십 tip
    apply_id bigint unsigned not null,                      # 포지션 외래 키
    created_date datetime default current_timestamp,        # 생성일
    updated_date datetime default current_timestamp,        # 수정일
    constraint fk_positioner_review_apply foreign key (apply_id)   # 포지션 외래 키 제약 조건
        references tbl_apply(id)
);


select *
from tbl_positioner_review;

ALTER TABLE tbl_inquiry
    MODIFY created_date DATETIME DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE tbl_positioner_review
    MODIFY updated_date DATETIME DEFAULT CURRENT_TIMESTAMP;

-- tbl_apply 테이블에 데이터 삽입
INSERT INTO tbl_apply (notice_id, resume_id, apply_type, apply_status)
VALUES
    (1, 1, '소프트웨어 개발', '지원 완료'),  -- 첫 번째 지원
    (2, 2, '데이터 분석', '지원 완료');      -- 두 번째 지원


-- tbl_positioner_review 테이블에 데이터 삽입
INSERT INTO tbl_positioner_review (positioner_review_tips, apply_id)
VALUES
    ('면접 준비 잘하세요.', 1),  -- 첫 번째 리뷰
    ('프로젝트 경험이 중요합니다.', 2);  -- 두 번째 리뷰

-- tbl_evaluation 테이블에 데이터 삽입
INSERT INTO tbl_evaluation (evaluation_overall, evaluation_difficulty, evaluation_result)
VALUES
    ('매우 좋음', '보통', '수료'),  -- 첫 번째 평가
    ('좋음', '어려움', '수료');      -- 두 번째 평가

-- tbl_evaluation_positioner 테이블에 데이터 삽입
INSERT INTO tbl_evaluation_positioner (positioner_review_id)
VALUES
    (1),  -- 첫 번째 리뷰에 대한 평가
    (2);  -- 두 번째 리뷰에 대한 평가

-- tbl_positioner_question 테이블에 데이터 삽입
INSERT INTO tbl_positioner_question (question_content, answer_content, positioner_review_id)
VALUES
    ('면접에서 가장 중요한 것은 무엇인가요?', '적절한 준비와 자신감입니다.', 1),  -- 첫 번째 질문
    ('지원서에서 가장 주의해야 할 점은?', '진실된 내용 기입이 중요합니다.', 2);  -- 두 번째 질문
