package com.app.positionback.controller.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.service.notice.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
        noticeDTO.setJobCategorycId(1L);
    }

    @PostMapping("corporation-login-main-write-posting")
    public RedirectView write(NoticeDTO noticeDTO, MultipartFile file) throws IOException {
        noticeDTO.setCorporationId(1L);

        noticeDTO.setJobCategorycId(1L);
        noticeService.saveNotice(noticeDTO, file);
        return new RedirectView("/notice/list");
    }

    private String getPath(){
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }

}
