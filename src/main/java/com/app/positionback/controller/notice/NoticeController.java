package com.app.positionback.controller.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.domain.notice.NoticeListDTO;
import com.app.positionback.service.notice.NoticeService;
import com.app.positionback.utill.Pagination;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
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
    public void getNoticePage(@RequestParam(required = false) Integer page,Pagination pagination, Model model) {

        // page가 null인 경우 기본값 설정
        if (page == null) {
            page = 1; // 기본 페이지 번호
        }
        NoticeListDTO noticeListDTO = noticeService.getNoticesByCorporationId(page,pagination,1L); // corporationId에 맞게 조정
        model.addAttribute("notices", noticeListDTO); // "notices"라는 이름으로 데이터를 추가
    }

    // 공고 목록 조회 (비동기)
    @GetMapping("notices/list/{page}")
    @ResponseBody
    public NoticeListDTO getNoticeList(@PathVariable("page") Integer page, Pagination pagination) {
        if(pagination.getOrder() == null){
            pagination.setOrder("recent");
        }
        // page가 null인 경우 기본값 설정
        if (page == null) {
            page = 1; // 기본 페이지 번호
        }
        return noticeService.getNoticesByCorporationId(page,pagination,1L); // corporationId에 맞게 조정
    }

//    // 공고 상세 조회
//    @GetMapping("notice/{id}")
//    public String getNoticeDetail(Long id, Model model) {
//        NoticeDTO notice = noticeService.getNoticeById(id);
//        model.addAttribute("notice", notice);
//        return "notice/noticeDetail";
//    }
//
//    // 공고 수정 페이지 이동
//    @GetMapping("corporation-login-main-update-posting/{id}")
//    public String goToUpdateNotice(Long id, Model model) {
//        NoticeDTO notice = noticeService.getNoticeById(id);
//        model.addAttribute("notice", notice);
//        return "notice/updateNotice";
//    }
//
//    // 공고 수정 처리
//    @PostMapping("corporation-login-main-update-posting")
//    public RedirectView update(NoticeDTO noticeDTO, MultipartFile file) throws IOException {
//        noticeService.updateNotice(noticeDTO, file);
//        return new RedirectView("/corporation/notice/list");
//    }

    // 공고 삭제 처리
    @DeleteMapping("notice/delete/{id}")
    @ResponseBody
    public void delete(@PathVariable("id") Long id) {
        noticeService.deleteNotice(id);
    }
}
