package com.app.positionback.service.kakao;

import com.app.positionback.domain.member.MemberDTO;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Optional;

@Service
@Slf4j
public class KakaoService {
    public String getKakaoAccessToken(String code){
        String accessToken = null;
        String requestURL = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(requestURL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            BufferedWriter bufferedWriter = null;
            StringBuilder stringBuilder = new StringBuilder();

            connection.setRequestMethod("POST");
            connection.setDoOutput(true);

            stringBuilder.append("grant_type=authorization_code");
            stringBuilder.append("&client_id=1535ee6277b12554f8cb83bc32bf2338");
            stringBuilder.append("&redirect_uri=http://localhost:10000/kakao/login");
            stringBuilder.append("&code=" + code);
            stringBuilder.append("&client_secret=u8BjedacnZr6bg5QVMDPCAvZBAJKxKht");

            bufferedWriter = new BufferedWriter(new OutputStreamWriter(connection.getOutputStream()));
            bufferedWriter.write(stringBuilder.toString());
            bufferedWriter.flush();

            if(connection.getResponseCode() == 200){
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line = null;
                String result = "";

                while((line = bufferedReader.readLine()) != null){
                    result += line;
                }
                JsonElement jsonElement = JsonParser.parseString(result);
                accessToken = jsonElement.getAsJsonObject().get("access_token").getAsString();

                bufferedReader.close();
                bufferedWriter.close();
            }
        } catch (IOException e){
            e.printStackTrace();
        }

        return accessToken;
    }

    public Optional<MemberDTO> getKakaoInfo(String token){
        String requestURL = "https://kapi.kakao.com/v2/user/me";
        MemberDTO memberDTO = null;

        try {
            URL url = new URL(requestURL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("POST");
            connection.setDoOutput(true);
            connection.setRequestProperty("Authorization", "Bearer " + token);

            if(connection.getResponseCode() == 200){
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line = null;
                String result = "";

                while((line = bufferedReader.readLine()) != null){
                    result += line;
                }

                JsonElement jsonElement = JsonParser.parseString(result);
                JsonElement kakaoAccount = jsonElement.getAsJsonObject().get("kakao_account").getAsJsonObject();
                JsonElement profile = kakaoAccount.getAsJsonObject().get("profile").getAsJsonObject();

                memberDTO = new MemberDTO();
                memberDTO.setMemberKakaoEmail(kakaoAccount.getAsJsonObject().get("email").getAsString());
                memberDTO.setMemberNickname(profile.getAsJsonObject().get("nickname").getAsString());
                memberDTO.setMemberKakaoProfileUrl(profile.getAsJsonObject().get("profile_image_url").getAsString());

                bufferedReader.close();
            }

        } catch (IOException e){
            e.printStackTrace();
        }
        return Optional.ofNullable(memberDTO);
    }
}
