package com.app.positionback.controller.corporation;

import com.app.positionback.domain.apply.ApplyListDTO;
import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.repository.apply.ApplyDAO;
import com.app.positionback.service.apply.ApplyService;
import com.app.positionback.service.corporation.CorporationService;
import com.app.positionback.utill.Pagination;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequiredArgsConstructor
public class CorporationController {

    private final CorporationService corporationService;
    private final ApplyService applyService;
    private final HttpSession session;
    private final ApplyDAO applyDAO;

    @GetMapping("/corporation")
    public String goToMain(Long id, Model model){
        CorporationVO corporationVO = (CorporationVO) session.getAttribute("member");
        FileDTO fileDTO = corporationService.getCorporationFileById(corporationVO.getId());

        model.addAttribute("file", fileDTO);
        return "corporation/corporation-login-main";
    }

    @GetMapping("/corporation/management")
    public String goToManagement(@RequestParam(required = false) Integer page, Pagination pagination, Model model){
        CorporationVO corporationVO = (CorporationVO) session.getAttribute("member");
        // page가 null인 경우 기본값 설정
        if (page == null) {
            page = 1; // 기본 페이지 번호
        }
        if(pagination.getOrder() == null){
            pagination.setOrder("recent");
        }
        if(pagination.getStatus() == null){
            pagination.setStatus("ongoing");
        }

        ApplyListDTO applyListDTO = applyService.getApplyByCorporationId(page, pagination, corporationVO.getId());
        model.addAttribute("applies", applyListDTO);

        // Pagination에서 상태별 개수 가져오기
        model.addAttribute("ongoingCount", pagination.getOngoingCount());
        model.addAttribute("closedCount", pagination.getClosedCount());

        return "corporation/corporation-login-main-manage-posting";
    }

    @GetMapping("applies/list/{page}")
    @ResponseBody
    public ApplyListDTO getApplyList(@PathVariable("page") Integer page, Pagination pagination){
        CorporationVO corporationVO = (CorporationVO) session.getAttribute("member");;

        if(pagination.getOrder() == null){
            pagination.setOrder("recent");
        }
        if(pagination.getStatus() == null){
            pagination.setStatus("ongoing");
        }
        // page가 null인 경우 기본값 설정
        if (page == null) {
            page = 1; // 기본 페이지 번호
        }
        return applyService.getApplyByCorporationId(page,pagination,corporationVO.getId());
    }
}
