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

    // 일반 회원 목록 MapperTests
    @Test
    public void testSelectAllMembers() {
        Pagination pagination = new Pagination();
        pagination.setTotal(adminMapper.selectMemberTotal());
        pagination.progress();
        log.info("{}, {}", pagination.getStartRow(), pagination.getRowCount());
        adminMapper.selectAllMembers(pagination);
    }

    // 기업 회원 목록 MapperTests
    @Test
    public void testSelectAllCorporationMembers() {
        Pagination pagination = new Pagination();
        pagination.setTotal(adminMapper.selectCorporationTotal());
        pagination.progress();
        log.info("{}, {}", pagination.getStartRow(), pagination.getRowCount());
        adminMapper.selectAllCorporationMembers(pagination);
    }
}
