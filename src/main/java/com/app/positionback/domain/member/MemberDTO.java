package com.app.positionback.domain.member;

import com.app.positionback.domain.corporation.CorporationVO;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

// for view
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
//    기업 정보
    private String corporationName;
    private String corporationAddress;
    private String corporationAddressDetail;
    private String corporationBusiness;
    private String corporationType;
    private String corporationSales;
    private String corporationOwner;
    private String corporationEmail;
    private String corporationPassword;
    private String corporationHomepage;
    private String corporationReadCount;

    public MemberVO toMemVO(){return new MemberVO(id,memberName,memberEmail,memberPassword,memberAddress,
            memberAddressDetail,memberNickname,memberStatus,memberType,memberWarningCount);}

    public CorporationVO toCorpVO(){
        return new CorporationVO(id,corporationName,corporationAddress,corporationAddressDetail,corporationBusiness,
                corporationType,corporationSales,corporationOwner,corporationEmail,corporationPassword,corporationHomepage,
                corporationReadCount);
    }
}
