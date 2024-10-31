package com.app.positionback.controller.admin;

import com.app.positionback.domain.corporation.CorporationDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.service.admin.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/*")
@RequiredArgsConstructor
@Slf4j
public class AdminController {

    private final AdminService adminService;

    @GetMapping("admin")
    // 문의 관리 : 필터(최신순, 답변상태순), 상태 수정(답변), 상태 STATUS, 페이징 처리
    // div class = inquiryTable_row => 한 사람의 문의 내용
    // 자바스크립트 코드에 fetch 모듈 admin서비스.js에 레이아웃
    public String goToAdminPage() {
        return "admin/admin";
    }

    // 일반 회원 정보 조회
    @GetMapping("/position-api/members")
    public ResponseEntity<List<MemberDTO>> getMembers() {
        List<MemberDTO> members = adminService.getMembers();
        return ResponseEntity.ok(members);
    }

    // 기업 회원 정보 조회
    @GetMapping("/position-api/corporatation-members")
    public ResponseEntity<List<CorporationDTO>> getCorporatationMembers() {
        List<CorporationDTO> Corporationmembers = adminService.getCorporatationMembers();
        return ResponseEntity.ok(Corporationmembers);
    }

}


