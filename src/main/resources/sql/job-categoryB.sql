create table tbl_job_categoryB(
    id bigint unsigned auto_increment primary key,
    job_categoryB_name varchar(255),
    job_categoryA_id bigint unsigned not null,
    constraint fk_job_categoryB_job_categoryA foreign key (job_categoryA_id)
        references tbl_job_categoryA(id)
);

select * from tbl_job_categoryB;

-- '사업 기획' 카테고리 삽입, job_categoryA_id = 1 참조
INSERT INTO tbl_job_categoryB (job_categoryB_name, job_categoryA_id)
VALUES ('직무·직업', 1);
