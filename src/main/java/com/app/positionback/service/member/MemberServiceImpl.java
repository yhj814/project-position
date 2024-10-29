package com.app.positionback.service.member;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.member.MemberDTO;
import com.app.positionback.domain.member.MemberVO;
import com.app.positionback.repository.corporation.CorporationDAO;
import com.app.positionback.repository.member.MemberDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.json.simple.JSONObject;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Optional;
import java.util.Random;

@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
@Slf4j
// for implement of member
public class MemberServiceImpl implements MemberService {
    private final MemberDAO memberDAO;

    @Override
    public int checkMemberEmail(String memberEmail) {
        return memberDAO.findCountByMemberEmail(memberEmail);
    }

    @Override
    public int checkMemberPhone(String memberPhone) {
        return memberDAO.findCountByMemberPhone(memberPhone);
    }

    @Override
    public String createCertificationNumber() {
        String numbers = "012356789";
        Random random = new Random();
        String certificationNumber = "";

        for(int i=0; i<6; i++) {
            certificationNumber += numbers.charAt(random.nextInt(numbers.length()));
        }

        return certificationNumber;
    }

    @Override
    public String sendMessage(String memberPhone) {
        String certificationNumber = createCertificationNumber();
        String api_key = "NCSBNK6DHAHDJS9X";
        String api_secret = "Y8S1KYO9F1P8VNHK30RIGO0Z4HBFE3PE";
        Message coolsms = new Message(api_key, api_secret);
        log.info(certificationNumber);

//        HashMap<String, String> params = new HashMap<String, String>();
//        params.put("to", memberPhone);
//        params.put("from", "01066178331");
//        params.put("type", "SMS");
//        params.put("text", "[Postion]\n아래의 인증번호를 정확히 입력해주세요.\n" + certificationNumber);
//        params.put("app_version", "test app 1.2"); // application name and version
//
//        try {
//            JSONObject obj = (JSONObject) coolsms.send(params);
//            System.out.println(obj.toString());
//        } catch (CoolsmsException e) {
//            System.out.println(e.getMessage());
//            System.out.println(e.getCode());
//        }
        return certificationNumber;
    }

    @Override
    public void join(MemberVO memberVO) {
        memberDAO.save(memberVO);
    }

    @Override
    public Optional<MemberVO> login(MemberVO memberVO) {
        return memberDAO.findByMemberEmailAndMemberPassword(memberVO);
    }
}
