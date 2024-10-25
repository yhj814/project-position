create table tbl_job_categoryB(
    id bigint unsigned auto_increment primary key,
    job_categoryB_name varchar(255),
    job_categoryA_id bigint unsigned not null,
    constraint fk_job_categoryB_job_categoryA foreign key (job_categoryA_id)
        references tbl_job_categoryA(id)
);

select * from tbl_job_categoryB;

