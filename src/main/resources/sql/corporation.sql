create table tbl_corporation(
    id bigint unsigned auto_increment primary key,
    corporation_name varchar(255) not null,
    corporation_address varchar(255) not null,
    corporation_address_detail varchar(255) not null,
    corporation_business varchar(255) not null, # 업종(유통업, 조선)
    corporation_type varchar(255) not null,  # 기업 분류(대기업, 중견기업)
    corporation_employees_number int not null,
    corporation_sales int not null,
    corporation_owner varchar(255) not null,
    corporation_email varchar(255) not null,
    corporation_password varchar(255) not null,
    corporation_homepage varchar(255),
    corporation_read_count int not null,
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp
);

alter table  tbl_corporation add(created_date datetime default current_timestamp);
alter table  tbl_corporation add(updated_date datetime default current_timestamp);

select * from  tbl_corporation;