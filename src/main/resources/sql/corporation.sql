create table tbl_corporation(
    id bigint unsigned auto_increment primary key,
    corporation_name varchar(255) not null,
    corporation_address varchar(255) not null,
    corporation_address_detail varchar(255) not null,
    corporation_business varchar(255) default '-', # 업종(유통업, 조선)
    corporation_type varchar(255) default '-',  # 기업 분류(대기업, 중견기업)
    corporation_owner varchar(255) not null,
    corporation_email varchar(255) not null,
    corporation_password varchar(255) not null,
    corporation_homepage varchar(255),
    corporation_read_count int default 0,
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp,
    corporation_Gen varchar(255),#대표 번호(general number)
    corporation_sales varchar(255) default '0'
);


alter table tbl_corporation add(corporation_sales varchar(255) default '0');
alter table tbl_corporation alter column corporation_sales set default 0;
alter table tbl_corporation alter column corporation_read_count set default 0;
alter table tbl_corporation alter column corporation_type set default '-';
alter table tbl_corporation alter column corporation_business set default '-';
alter table tbl_corporation drop column corporation_business;
alter table tbl_corporation drop column corporation_type;

alter table tbl_corporation drop column corporation_sales;
alter table tbl_corporation add(corporation_sales int);

alter table  tbl_corporation drop column corporation_gen;
alter  table  tbl_corporation add (corporation_gen varchar(255));

alter table  tbl_corporation add(created_date datetime default current_timestamp);
alter table  tbl_corporation add(updated_date datetime default current_timestamp);

select * from  tbl_corporation;