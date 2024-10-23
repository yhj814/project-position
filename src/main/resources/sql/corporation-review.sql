create table tbl_corporation_review(
    id bigint unsigned auto_increment primary key ,
    review_content varchar(500) not null ,
    review_tips varchar(255) not null,
    member_id bigint unsigned not null,
    notice_id bigint unsigned not null,
    evaluation_id bigint unsigned not null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp,
    constraint fk_corporation_review_member foreign key (member_id)
                                   references tbl_member(id),
    constraint fk_corporation_review_notice foreign key (notice_id)
        references tbl_notice(id),
    constraint fk_corporation_review_evaluation foreign key (evaluation_id)
        references tbl_evaluation(id)
);

select * from tbl_corporation_review;
