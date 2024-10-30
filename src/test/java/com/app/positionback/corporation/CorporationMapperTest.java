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
}
