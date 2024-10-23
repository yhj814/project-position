create table tbl_scrap(
  id bigint unsigned auto_increment primary key ,
  member_id bigint unsigned not null ,
  notice_id bigint unsigned not null ,
  constraint  fk_scrap_member foreign key (member_id)
                      references tbl_member(id),
  constraint  fk_scrap_notice foreign key (notice_id)
      references tbl_notice(id)
);


select * from tbl_scrap;