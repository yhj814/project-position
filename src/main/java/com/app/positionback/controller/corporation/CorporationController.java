package com.app.positionback.controller.corporation;

import com.app.positionback.domain.corporation.CorporationVO;
import com.app.positionback.domain.file.FileDTO;
import com.app.positionback.service.corporation.CorporationService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class CorporationController {

    private final CorporationService corporationService;
    private final HttpSession session;

    @GetMapping("/corporation")
    public String goToMain(Long id, Model model){
        CorporationVO corporationVO = (CorporationVO) session.getAttribute("member");
        FileDTO fileDTO = corporationService.getCorporationFileById(corporationVO.getId());

        model.addAttribute("file", fileDTO);
        return "corporation/corporation-login-main";
    }

    @GetMapping("/corporation/management")
    public String goToManagement(Model model){
        CorporationVO corporationVO = (CorporationVO) session.getAttribute("member");
        return "corporation/corporation-login-main-manage-posting";
    }
}
