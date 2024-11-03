package com.app.positionback.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.mapper.admin.AdminMapper;
import com.app.positionback.utill.Pagination;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Slf4j
public class AdminMapperTests {
    @Autowired
    private AdminMapper adminMapper;

    @Test
    public void testAdminMapper() {}

    @Test
    public void testSelectAllMembers() {
        List<MemberDTO> members = adminMapper.selectAllMembers(new Pagination());
    }

    @Test
    public void testSelectAllCorporationMembers() {
        List<CorporationDTO> corporations = adminMapper.selectAllCorporationMembers(new Pagination());
    }
}
