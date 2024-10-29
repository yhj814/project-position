package com.app.positionback.corporation;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.mapper.corporation.CorporationMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Slf4j
public class CorporationMapperTest {

    @Autowired
    private CorporationMapper corporationMapper;
    @Autowired
    private CorporationDTO corporationDTO;
    @Autowired
    private MemberDTO memberDTO;

    @Test
    public void corporationInsertTest() {
        CorporationDTO corporationDTO = new CorporationDTO();

        corporationDTO.setCorporationName("테스트 기업");
        corporationDTO.setCorporationAddress("강남구 테헤란로");
        corporationDTO.setCorporationAddressDetail("주류성빌딩");
        corporationDTO.setCorporationBusiness("유통업");
        corporationDTO.setCorporationType("대기업");
        corporationDTO.setCorporationSales("1조 5000억");
        corporationDTO.setCorporationOwner("홍길동");
        corporationDTO.setCorporationEmail("corpTest@test.com");
        corporationDTO.setCorporationPassword("123456");
        corporationDTO.setCorporationGen("010-1234-1234");
        corporationDTO.setCorporationHomepage("www.test.co.kr");

        corporationMapper.insertCorporation(corporationDTO.toVO());
        log.info("memberDTO: {}", corporationDTO);

    }

    @Test
    public void corporationSelectTest() {
        CorporationDTO corporationDTO = new CorporationDTO();
        corporationDTO.setCorporationEmail("corpTest@test.com");
        corporationDTO.setCorporationPassword("123456");

        Optional<CorporationVO> foundCorporation =
                corporationMapper.selectByCorporationEmailAndPassword(corporationDTO.toVO());

        foundCorporation.map(CorporationVO::toString).ifPresent(log::info);
    }
}
