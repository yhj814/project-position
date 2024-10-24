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

INSERT INTO tbl_corporation (
    corporation_name,
    corporation_address,
    corporation_address_detail,
    corporation_business,
    corporation_type,
    corporation_employees_number,
    corporation_sales,
    corporation_owner,
    corporation_email,
    corporation_password,
    corporation_homepage,
    corporation_read_count
) VALUES (
             'ABC 유통',
             '서울특별시 강남구 테헤란로',
             '123-45',
             '유통업',
             '대기업',
             500,
             100000000,
             '김철수',
             'abc@company.com',
             'password123',
             'www.abccorporation.com',
             0
         );
