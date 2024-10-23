create table tbl_positioner_statistics (
    id bigint unsigned auto_increment primary key,           # 기본 키
    member_id bigint unsigned not null,                      # 회원 외래 키
    corporation_id bigint unsigned not null,                     # 기업 외래 키
    positioner_question_id bigint unsigned not null,        # 포지셔너 후기 질문 외래 키
    positioner_answer_id bigint unsigned not null,              # 포지셔너 후기 답 외래 키
    positioner_review_id bigint unsigned not null,          # 포지셔너 후기 답 외래 키
    constraint fk_positioner_statistics_member foreign key (member_id)     # 회원 외래 키 제약 조건
        references tbl_member(id),
    constraint fk_positioner_statistics_corporation foreign key (corporation_id)    # 기업 외래 키 제약 조건
        references tbl_corporation(id),
    constraint fk_positioner_statistics_question foreign key (positioner_question_id)  # 포지셔너 후기 질문 외래 키 제약 조건
        references tbl_positioner_question(id),
    constraint fk_positioner_statistics_positioner_answer foreign key (positioner_answer_id)  # 포지셔너 후기 답 외래 키 제약 조건
        references tbl_positioner_answer(id),
    constraint fk_positioner_statistics_review foreign key (positioner_review_id)      # 포지셔너 후기 외래 키 제약 조건
        references tbl_positioner_review(id)
);
