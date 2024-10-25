package com.app.positionback.service.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.repository.notice.NoticeDAO;
import com.app.positionback.repository.notice.NoticeFileDAO;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class NoticeServiceImpl implements NoticeService {
    private final NoticeDAO noticeDAO;
    private final NoticeFileDAO noticeFileDAO;

    @Override
    public void saveNotice(NoticeDTO noticeDTO, MultipartFile file) throws IOException {
        noticeDAO.saveNotice(noticeDTO);
        String rootPath = "C:/upload/" + getPath();
        FileDTO fileDTO = new FileDTO();
        UUID uuid = UUID.randomUUID();

        fileDTO.setFilePath(getPath());

        File directory = new File(rootPath);
        if(!directory.exists()){
            directory.mkdirs();
        }

        file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));
        fileDTO.setFileName(uuid.toString() + "_" + file.getOriginalFilename());

        noticeFileDAO.saveFile(fileDTO);
        Long noticeId = noticeFileDAO.getLastInsertedId();
        Long fileId = noticeFileDAO.getLastInsertedId();
        noticeFileDAO.linkNoticeWithFile(noticeId, fileId);
    }
    private String getPath(){
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }


}
