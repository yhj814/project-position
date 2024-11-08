create table tbl_evaluation (
    id bigint unsigned auto_increment primary key,  # 기본 키
    evaluation_overall varchar(255),                # 전반적 평가
    evaluation_difficulty varchar(255),             # 난이도
    evaluation_result varchar(255) default '수료'  # 결과 (기본값: 수료)
);

select * from tbl_evaluation;


