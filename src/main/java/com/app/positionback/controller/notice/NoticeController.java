package com.app.positionback.controller.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.service.notice.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/corporation/*")
public class NoticeController {
    private final NoticeService noticeService;

//    공고 작성 페이지 이동
    @GetMapping("corporation-login-main-write-posting")
    public void goToWriteNotice(NoticeDTO noticeDTO) {
        noticeDTO.setCorporationId(1L);
    }

    @PostMapping("corporation-login-main-write-posting")
    public RedirectView write(NoticeDTO noticeDTO, MultipartFile file) throws IOException {
        noticeDTO.setCorporationId(1L);
        noticeService.saveNotice(noticeDTO, file);
        return new RedirectView("/notice/list");
    }

    // 공고 목록 조회
    @GetMapping("corporation-login-main-posting-registration")
    public void getNoticePage(Model model) {
        List<NoticeDTO> notices = noticeService.getNoticesByCorporationId(1L); // corporationId에 맞게 조정
        model.addAttribute("notices", notices); // "notices"라는 이름으로 데이터를 추가
    }
//    public String getNoticeList(Model model) {
//        List<NoticeDTO> notices = noticeService.getNoticesByCorporationId(1L); // Assuming 1L is the corporationId
//        model.addAttribute("notices", notices);
//        return "corporation-login-main-posting-registration";
//    }

    // 공고 목록 조회 (비동기)
    @GetMapping("notices/list")
    @ResponseBody
    public List<NoticeDTO> getNoticeList() {
        return noticeService.getNoticesByCorporationId(1L); // corporationId에 맞게 조정
    }

    // 공고 상세 조회
    @GetMapping("notice/{id}")
    public String getNoticeDetail(Long id, Model model) {
        NoticeDTO notice = noticeService.getNoticeById(id);
        model.addAttribute("notice", notice);
        return "notice/noticeDetail";
    }

    // 공고 수정 페이지 이동
    @GetMapping("corporation-login-main-update-posting/{id}")
    public String goToUpdateNotice(Long id, Model model) {
        NoticeDTO notice = noticeService.getNoticeById(id);
        model.addAttribute("notice", notice);
        return "notice/updateNotice";
    }

    // 공고 수정 처리
    @PostMapping("corporation-login-main-update-posting")
    public RedirectView update(NoticeDTO noticeDTO, MultipartFile file) throws IOException {
        noticeService.updateNotice(noticeDTO, file);
        return new RedirectView("/corporation/notice/list");
    }

    // 공고 삭제 처리
    @PostMapping("notice/delete/{id}")
    public RedirectView delete(Long id) {
        noticeService.deleteNotice(id);
        return new RedirectView("/corporation/notice/list");
    }
}
