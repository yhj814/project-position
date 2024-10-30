package com.app.positionback.service.member;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

// 회원관련 서비스
public interface MemberService {
    public int checkMemberEmail(String memberEmail);
    public int checkMemberPhone(String memberPhone);
    public String createCertificationNumber();
    public String sendMessage(String memberPhone);
    public void join(MemberVO memberVO);
    public void join(CorporationVO corporationVO, String uuid, String path, MultipartFile file) throws IOException;
    public Optional<MemberVO> login(MemberVO memberVO);
    public FileDTO uploadFile(MultipartFile file) throws IOException;
}
