package com.app.positionback.service.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.mapper.admin.AdminMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class AdminServiceImpl implements AdminService {
    private final AdminMapper adminMapper;

    public List<MemberDTO> getMembers() {
        return adminMapper.selectAllMembers();
    }

    public List<CorporationDTO> getCorporationMembers() {
        return adminMapper.selectAllCorporationMembers();
    }
}
