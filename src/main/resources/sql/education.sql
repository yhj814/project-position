create table tbl_education (
    id bigint unsigned auto_increment primary key, # 기본 키
    education_type varchar(255) not null, # 학력 구분 (예: 고졸, 대졸)
    education_school_name varchar(255) not null, # 학교명
    education_graduated varchar(255), # 졸업 여부 (졸업, 재학중, 휴학중 등)
    education_admission_date varchar(255), # 입학 연월
    education_graduation_date varchar(255), # 졸업 연월
    education_passed_date varchar(255), # 검정고시 합격 연월
    education_major varchar(255), # 대학 전공
    education_university varchar(255), # 대학 구분(2년제,3년제 등)
    education_transferred int default 0, # 편입여부
    created_date timestamp default current_timestamp, # 생성일
    updated_date timestamp default current_timestamp # 수정일
);
select * from tbl_education;