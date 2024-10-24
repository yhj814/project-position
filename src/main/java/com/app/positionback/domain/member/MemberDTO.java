package com.app.positionback.domain.member;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class MemberDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String memberName;
    private String memberEmail;
    private String memberPassword;
    private String memberAddress;
    private String memberAddressDetail;
    private String memberNickname;
    private String memberStatus;
    private String memberType;
    private String memberWarningCount;

    public MemberVO toVo(){return new MemberVO(id,memberName,memberEmail,memberPassword,memberAddress,memberAddressDetail,memberNickname,memberStatus,memberType,memberWarningCount);}
}
