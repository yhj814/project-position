package com.app.positionback.service.notice;

import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.domain.notice.NoticeDTO;
import com.app.positionback.domain.notice.NoticeListDTO;
import com.app.positionback.repository.notice.NoticeDAO;
import com.app.positionback.repository.notice.NoticeFileDAO;
import com.app.positionback.utill.Pagination;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
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

        Long noticeId = noticeDAO.getLastInsertedId();

        saveAndLinkFile(file, noticeId);
    }

    @Override
    public void updateNotice(NoticeDTO noticeDTO, MultipartFile file) throws IOException {
        noticeDAO.updateNotice(noticeDTO);
        Long noticeId = noticeDTO.getId();

        // 기존 파일 처리 로직 (선택적 파일 삭제 또는 업데이트 가능)
        noticeFileDAO.deleteFilesByNoticeId(noticeId);

        saveAndLinkFile(file, noticeId);
    }

    @Override
    public void deleteNotice(Long id) {
        noticeFileDAO.deleteFilesByNoticeId(id);
        noticeDAO.deleteNotice(id);
    }

    // 상세보기
    @Override
    public NoticeDTO getNoticeById(Long id) {
        return noticeDAO.findNoticeById(id);
    }


    // 기업이 작성한 공고 목록
    @Override
    public NoticeListDTO getNoticesByCorporationId(int page, Pagination pagination, Long corporationId) {
        NoticeListDTO noticeListDTO = new NoticeListDTO();
        pagination.setPage(page);
        pagination.setTotal(noticeDAO.getTotal(pagination,corporationId)); // 총 공고 수를 가져오는 메서드 호출
        pagination.progress();
        noticeListDTO.setPagination(pagination);
        noticeListDTO.setNotices(noticeDAO.findNoticesByCorporationId(pagination,corporationId));

        // 각 상태에 따른 총 개수 조회
        // ongoing 상태 개수 조회
        Pagination ongoingPagination = new Pagination();
        ongoingPagination.setStatus("ongoing");
        int ongoingCount = noticeDAO.getTotal(ongoingPagination, corporationId); // ongoing 상태 개수
        // closed 상태 개수 조회
        Pagination closedPagination = new Pagination();
        closedPagination.setStatus("closed");
        int closedCount = noticeDAO.getTotal(closedPagination, corporationId); // closed 상태 개수

        // Pagination에 상태별 개수 추가
        pagination.setOngoingCount(ongoingCount);
        pagination.setClosedCount(closedCount);
        return noticeListDTO;
    }

    // 기업이 작성한 공고 목록 개수
    @Override
    public int getTotal(Pagination pagination,Long corporationId) {
        return noticeDAO.getTotal(pagination,corporationId);
    }

    private void saveAndLinkFile(MultipartFile file, Long noticeId) throws IOException {
        if (file != null && !file.isEmpty()) {
            String rootPath = "C:/upload/" + getPath();
            UUID uuid = UUID.randomUUID();

            File directory = new File(rootPath);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            File savedFile = new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename());
            file.transferTo(savedFile);

            FileDTO fileDTO = new FileDTO();
            fileDTO.setFilePath(getPath());
            fileDTO.setFileName(uuid.toString() + "_" + file.getOriginalFilename());

            noticeFileDAO.saveFile(fileDTO);
            Long fileId = noticeFileDAO.getLastInsertedId();

            noticeFileDAO.linkNoticeWithFile(noticeId, fileId);
        }
    }

    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }

//    @Override
//    public void saveNotice(NoticeDTO noticeDTO, MultipartFile file) throws IOException {
//        // 공지사항 저장
//        noticeDAO.saveNotice(noticeDTO);
//        Long noticeId = noticeDTO.getId(); // 공지사항 ID 가져오기
//        if (noticeId == null) {
//            noticeId = noticeDAO.getLastInsertedId(); // ID를 DB에서 가져오기
//        }
//
//        // 파일 처리 및 저장
//        String rootPath = "C:/upload/" + getPath();
//        FileDTO fileDTO = new FileDTO();
//        UUID uuid = UUID.randomUUID();
//
//        fileDTO.setFilePath(getPath());
//        File directory = new File(rootPath);
//        if (!directory.exists()) {
//            directory.mkdirs();
//        }
//
//        file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));
//        fileDTO.setFileName(uuid.toString() + "_" + file.getOriginalFilename());
//
//        // 파일 정보 저장
//        noticeFileDAO.saveFile(fileDTO);
//        Long fileId = noticeFileDAO.getLastInsertedId(); // 파일 ID 가져오기
//
//        // 공지사항과 파일 연결
//        noticeFileDAO.linkNoticeWithFile(noticeId, fileId);
//    }
//
//    private String getPath(){
//        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
//    }


}
