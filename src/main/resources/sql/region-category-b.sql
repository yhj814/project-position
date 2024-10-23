create table tbl_region_categoryB(
    id bigint unsigned auto_increment primary key,
    region_categoryB_name varchar(255),
    region_categoryA_id bigint unsigned not null,
    constraint fk_region_categoryB_region_categoryA foreign key (region_categoryA_id)
        references tbl_region_categoryA(id)
);

select * from tbl_region_categoryB;

