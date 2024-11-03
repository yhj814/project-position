package com.app.positionback.domain.complain;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class ComplainVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String complainContent;
    private int complainCount;
    private String complainStatus;
    private Long corporationId;
    private Long memberId;
    private String createdDate;
    private String updatedDate;
}

//id bigint unsigned auto_increment primary key,           # 기본 키
//    complain_content text not null,                            # 신고 내용
//    complain_count bigint unsigned default 1,                  # 누적 횟수
//    complain_status varchar(255),                              # 상태
//    corporation_id bigint unsigned not null,                     # 기업 외래 키
//    member_id bigint unsigned not null,                      # 회원 외래 키
//    created_date datetime default current_timestamp,         # 신고일
//    updated_date datetime default  current_timestamp,
