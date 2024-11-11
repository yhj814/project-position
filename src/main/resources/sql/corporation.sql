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
    corporation_interested_count int default 0,
    corporation_opening_date date,
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp,
    corporation_Gen varchar(255),#대표 번호(general number)
    corporation_sales varchar(255) default '0'
);


alter table tbl_corporation add(corporation_sales varchar(255) default '0');
alter table tbl_corporation alter column corporation_sales set default 0;
alter table tbl_corporation add column corporation_opening_date date;
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
alter table  tbl_corporation add(corporation_code varchar(255) not null);

alter table tbl_corporation modify column corporation_read_count int default 0;

select * from  tbl_corporation;

select * from tbl_file;
select * from tbl_corporation_file;

INSERT INTO tbl_corporation (
    corporation_name,
    corporation_address,
    corporation_address_detail,
    corporation_owner,
    corporation_email,
    corporation_password,
    corporation_homepage,
    corporation_read_count,
    corporation_Gen,
    corporation_sales,
    corporation_code
) VALUES
      ('삼성전자', '서울특별시 강남구', '테헤란로 129', '이재용', 'samsung@gmail.com', '123456', 'samsung.com', '30', '1588-3333', '1000000000', '101-81-12345'),
      ('LG전자', '서울특별시 영등포구', '여의대로 128', '구광모', 'lg@gmail.com', '123456', 'lge.co.kr', '25', '1588-5454', '500000000', '102-82-54321'),
      ('네이버', '경기도 성남시 분당구', '정자일로 100', '한성숙', 'naver@gmail.com', '123456', 'naver.com', '20', '1588-0000', '750000000', '103-81-67890'),
      ('현대자동차', '서울특별시 강남구', '영동대로 12', '정의선', 'hyundai@gmail.com', '123456', 'hyundai.com', '15', '1588-8888', '1200000000', '104-82-13579'),
      ('카카오', '경기도 성남시 분당구', '판교역로 166', '김범수', 'kakao@gmail.com', '123456', 'kakaocorp.com', '10', '1577-3321', '100000000', '120-81-47521'),
      ('SK텔레콤', '서울특별시 중구', '을지로 33', '박정호', 'sktelecom@gmail.com', '123456', 'sktelecom.com', '18', '1599-0011', '650000000', '105-85-23456'),
      ('CJ제일제당', '서울특별시 중구', '동호로 11', '이재현', 'cj@gmail.com', '123456', 'cj.co.kr', '12', '1588-9999', '300000000', '106-84-12121'),
      ('한화그룹', '서울특별시 중구', '세종대로 92', '김승연', 'hanwha@gmail.com', '123456', 'hanwha.com', '9', '1588-2233', '450000000', '107-83-98765'),
      ('신세계', '서울특별시 중구', '남대문로 63', '이명희', 'shinsegae@gmail.com', '123456', 'shinsegae.com', '7', '1588-2277', '200000000', '108-85-56432'),
      ('롯데그룹', '서울특별시 송파구', '올림픽로 300', '신동빈', 'lotte@gmail.com', '123456', 'lotte.co.kr', '35', '1588-2500', '800000000', '109-86-14253'),
      ('포스코', '서울특별시 강남구', '포스코타워 1층', '최정우', 'posco@gmail.com', '123456', 'posco.co.kr', '23', '1588-0033', '900000000', '110-82-10223'),
      ('한국전력', '서울특별시 서초구', '서초대로 455', '김종갑', 'kepco@gmail.com', '123456', 'kepco.co.kr', '28', '1588-5700', '500000000', '111-81-56789'),
      ('우리은행', '서울특별시 중구', '회현로 67', '손태승', 'woori@gmail.com', '123456', 'wooribank.com', '14', '1599-5000', '300000000', '112-81-14567'),
      ('신한은행', '서울특별시 중구', '청계천로 100', '조용병', 'shinhan@gmail.com', '123456', 'shinhan.com', '21', '1588-7000', '600000000', '113-84-67845'),
      ('KB국민은행', '서울특별시 영등포구', '국회대로 76길 50', '허인', 'kb@gmail.com', '123456', 'kbfg.com', '19', '1599-9999', '750000000', '114-85-74512'),
      ('하나은행', '서울특별시 강남구', '강남대로 120', '지성규', 'hana@gmail.com', '123456', 'hanafn.com', '10', '1588-1111', '550000000', '115-81-41234'),
      ('교보생명', '서울특별시 종로구', '종로 1', '신창재', 'kyobo@gmail.com', '123456', 'kyobo.com', '12', '1588-8700', '700000000', '116-86-12389'),
      ('농협', '서울특별시 중구', '을지로 110', '이성희', 'nonghyup@gmail.com', '123456', 'nonghyup.com', '20', '1599-9900', '500000000', '117-81-56489'),
      ('현대해상', '서울특별시 종로구', '종로 120', '조용일', 'hyundaiins@gmail.com', '123456', 'hyundaiins.com', '17', '1588-5656', '850000000', '118-83-10928'),
      ('메리츠화재', '서울특별시 중구', '퇴계로 122', '김용범', 'meritz@gmail.com', '123456', 'meritzfire.com', '16', '1599-9000', '400000000', '119-87-55678');


