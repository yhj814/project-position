create table tbl_job_categoryA(
  id bigint unsigned auto_increment primary key,
  job_categoryA_name varchar(255)
);

INSERT INTO tbl_job_categoryA (job_categoryA_name) VALUES ('기획·전략');

select *
from tbl_job_categoryA;
