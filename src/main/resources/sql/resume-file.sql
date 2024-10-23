create table tbl_resume_file(
    id bigint unsigned auto_increment primary key,
    resume_id bigint unsigned not null,
    constraint fk_resume_file_file foreign key (id)
                            references tbl_file(id),
    constraint fk_resume_file_resume foreign key (resume_id)
                            references tbl_resume(id)
);

select * from tbl_resume_file;

alter table  tbl_resume_file add(created_date datetime default current_timestamp);
alter table  tbl_resume_file add(updated_date datetime default current_timestamp);