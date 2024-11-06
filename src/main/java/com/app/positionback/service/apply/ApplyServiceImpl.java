package com.app.positionback.service.apply;

import com.app.positionback.domain.apply.ApplyListDTO;
import com.app.positionback.domain.apply.ApplyVO;
import com.app.positionback.domain.file.CertificationFileDTO;
import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.repository.apply.ApplyDAO;
import com.app.positionback.repository.file.CertificationFileDAO;
import com.app.positionback.repository.file.FileDAO;
import com.app.positionback.utill.Pagination;
import lombok.RequiredArgsConstructor;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Service
@Primary
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class ApplyServiceImpl implements ApplyService{
    private final ApplyDAO applyDAO;
    private final FileDAO fileDAO;
    private final CertificationFileDAO certificationFileDAO;


    @Override
    public ApplyListDTO getApplyByCorporationId(int page, Pagination pagination, Long corporationId) {
        ApplyListDTO applyListDTO = new ApplyListDTO();
        pagination.setPage(page);
        pagination.setTotal(applyDAO.getTotal(pagination,corporationId));
        pagination.progress();
        applyListDTO.setPagination(pagination);
        applyListDTO.setApplies(applyDAO.findApplyByCorporationId(pagination,corporationId));

        Pagination ongoingPagination = new Pagination();
        ongoingPagination.setStatus("ongoing");
        int ongoingCount = applyDAO.getTotal(ongoingPagination,corporationId);

        Pagination closedPagination = new Pagination();
        closedPagination.setStatus("closed");
        int closedCount = applyDAO.getTotal(closedPagination,corporationId);

        Pagination postitionPagination = new Pagination();
        postitionPagination.setStatus("position");
        int paginationCount = applyDAO.getTotal(postitionPagination,corporationId);

        Pagination reviewPagination = new Pagination();
        reviewPagination.setStatus("review");
        int reviewCount = applyDAO.getTotal(reviewPagination,corporationId);

        pagination.setOngoingCount(ongoingCount);
        pagination.setClosedCount(closedCount);
        pagination.setPositionCount(paginationCount);
        pagination.setReviewCount(reviewCount);


        return applyListDTO;
    }

    @Override
    public int getTotal(Pagination pagination, Long corporationId) {
        return applyDAO.getTotal(pagination,corporationId);
    }

    @Override
    public void setApplyStatus(ApplyVO applyVO) {
        applyDAO.updateApplyStatus(applyVO);
    }

    @Override
    public void uploadCertificationFile(MultipartFile file, Long applyId) throws IOException {
        String rootPath = "C:/upload/" + getPath();
        FileDTO fileDTO = new FileDTO();
        CertificationFileDTO certificationFileDTO = new CertificationFileDTO();

        // UUID 생성 및 파일 경로 설정
        UUID uuid = UUID.randomUUID();
        fileDTO.setFilePath(getPath());
        String uniqueFileName = uuid.toString() + "_" + file.getOriginalFilename();

        // 디렉토리 생성
        File directory = new File(rootPath);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        // 파일 저장
        if (file.getContentType().startsWith("image")) {
            // 원본 이미지 저장
            file.transferTo(new File(rootPath, uniqueFileName));
            fileDTO.setFileName(uniqueFileName);
        }

        // 파일 크기 설정
        String fileSize = String.format("%.2f", file.getSize() / 1024.0 / 1024.0); // MB 단위로 파일 크기 설정
        fileDTO.setFileSize(fileSize);

        // 파일 정보 저장
        fileDAO.save(fileDTO.toVO());

        // CertificationFileDTO 설정 및 저장
        certificationFileDTO.setFileId(fileDAO.findLastInsertId());
        certificationFileDTO.setApplyId(applyId);
        certificationFileDAO.save(certificationFileDTO.toVO());
    }
    private String getPath(){
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}
