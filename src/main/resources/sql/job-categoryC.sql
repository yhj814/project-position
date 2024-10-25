create table tbl_job_categoryC(
    id bigint unsigned auto_increment primary key,
    job_categoryC_name varchar(255),
    job_categoryB_id bigint unsigned not null,
    constraint fk_job_categoryC_job_categoryB foreign key (job_categoryB_id)
        references tbl_job_categoryB(id)
);

select * from tbl_job_categoryC;

INSERT INTO tbl_job_categoryC (job_categoryC_name, job_categoryB_id)
VALUES ('게임기획', 1);