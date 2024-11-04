create database positionback;
use positionback;
create table tbl_member(
    id bigint unsigned auto_increment primary key,
    member_name varchar(255) not null,
    member_email varchar(255) not null,
    member_password varchar(255) not null,
    member_address varchar(255) not null,
    member_address_detail varchar(255) not null,
    member_nickname varchar(255) default '포지셔너',
    member_status varchar(255) default '활동중',
    member_type varchar(255) default '포지셔너',
    member_warning_count int default 0, # 신고 누적 횟수
    created_date datetime default current_timestamp,
    updated_date datetime default  current_timestamp
);

select * from tbl_member;
select * from tbl_corporation;
delete from tbl_member;

alter table  tbl_member add(created_date datetime default current_timestamp);
alter table  tbl_member add(updated_date datetime default current_timestamp);
alter table  tbl_member add(member_warning_count int default 0);
alter table tbl_member add(member_kakao_email varchar(255));
alter table tbl_member add(member_kakao_profile_url varchar(255));
alter table tbl_member modify column member_phone varchar(255);
alter table tbl_member modify column member_address_detail varchar(255);
alter table tbl_member modify column member_password varchar(255);
alter table tbl_member drop column member_type;


INSERT INTO tbl_member (
    member_name,
    member_warning_count,
    member_phone,
    member_email,
    member_kakao_email,
    member_address,
    member_status,
    member_address_detail,
    member_type
) VALUES
      ('김민수', '0', '010-1234-5678', 'minsu@gmail.com', NULL, '서울시 서초구', '활동중', '서초역 3번출구', '포지셔너'),
      ('박지훈', '1', '010-2345-6789', NULL, 'jihoon@kakao.com', '서울시 강남구', '활동중', '강남역 5번출구', '포지셔너'),
      ('이영희', '2', '010-3456-7890', 'younghee@gmail.com', NULL, '서울시 용산구', '활동중', '용산역 2번출구', '포지셔너'),
      ('최수진', '1', '010-4567-8901', NULL, 'sujin@kakao.com', '서울시 마포구', '정지', '홍대입구역 1번출구', '포지셔너'),
      ('정우성', '0', '010-5678-9012', 'woosung@gmail.com', NULL, '서울시 동작구', '활동중', '사당역 6번출구', '포지셔너'),
      ('김다연', '2', '010-6789-0123', NULL, 'dayeon@kakao.com', '서울시 은평구', '활동중', '불광역 3번출구', '포지셔너'),
      ('장혜진', '1', '010-7890-1234', 'hyejin@gmail.com', NULL, '서울시 송파구', '정지', '잠실역 2번출구', '포지셔너'),
      ('이준영', '0', '010-8901-2345', NULL, 'junyoung@kakao.com', '서울시 관악구', '활동중', '신림역 4번출구', '포지셔너'),
      ('박소영', '0', '010-9012-3456', 'soyoung@gmail.com', NULL, '서울시 광진구', '활동중', '건대입구역 7번출구', '포지셔너'),
      ('김수현', '3', '010-1122-3344', NULL, 'suhyun@kakao.com', '서울시 노원구', '활동중', '노원역 5번출구', '포지셔너'),
      ('황민호', '0', '010-2233-4455', 'minho@gmail.com', NULL, '서울시 성북구', '정지', '길음역 1번출구', '포지셔너'),
      ('정재훈', '2', '010-3344-5566', NULL, 'jaehoon@kakao.com', '서울시 강북구', '활동중', '미아사거리역 2번출구', '포지셔너'),
      ('김예림', '1', '010-4455-6677', 'yerim@gmail.com', NULL, '서울시 금천구', '활동중', '가산디지털단지역 3번출구', '포지셔너'),
      ('박성찬', '0', '010-5566-7788', NULL, 'seongchan@kakao.com', '서울시 동대문구', '정지', '청량리역 4번출구', '포지셔너'),
      ('이하나', '1', '010-6677-8899', 'hana@gmail.com', NULL, '서울시 종로구', '활동중', '종로3가역 5번출구', '포지셔너'),
      ('홍정민', '0', '010-7788-9900', NULL, 'jungmin@kakao.com', '서울시 중구', '활동중', '을지로입구역 6번출구', '포지셔너'),
      ('서민경', '1', '010-8899-0011', 'minkyung@gmail.com', NULL, '서울시 서대문구', '활동중', '신촌역 2번출구', '포지셔너'),
      ('조현우', '2', '010-9900-1122', NULL, 'hyunwoo@kakao.com', '서울시 강서구', '활동중', '김포공항역 1번출구', '포지셔너'),
      ('최윤지', '3', '010-1122-2233', 'yoonji@gmail.com', NULL, '서울시 중랑구', '활동중', '중화역 4번출구', '포지셔너'),
      ('백승호', '0', '010-2233-3344', NULL, 'seungho@kakao.com', '서울시 도봉구', '활동중', '쌍문역 3번출구', '포지셔너');













