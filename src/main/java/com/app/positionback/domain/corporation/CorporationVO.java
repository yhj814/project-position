package com.app.positionback.domain.corporation;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor
@NoArgsConstructor
public class CorporationVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String corporationName;
    private String corporationAddress;
    private String corporationAddressDetail;
    private String corporationType;
    private String corporationOwner;
    private String corporationEmail;
    private String corporationPassword;
    private String corporationHomepage;
    private String corporationGen;
    private String corporationSales;
    private String corporationCode;
    private String corporationEmployeesNumber;
    private int corporationReadCount;
    private String corporationBusiness;
    private int corporationInterestedCount;
    private String corporationOpeningDate;
}
