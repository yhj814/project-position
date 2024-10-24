document.addEventListener("DOMContentLoaded", function () {
    const btnService = document.querySelector(".btn_service"); // 기업 서비스 버튼
    const layerMember = document.querySelector(".layer_member"); // 드롭다운 메뉴

    // 버튼 클릭 이벤트 리스너
    btnService.addEventListener("click", function () {
        const isExpanded = btnService.getAttribute("aria-expanded") === "true"; // 현재 메뉴 상태 확인

        // aria-expanded 속성 토글
        btnService.setAttribute("aria-expanded", !isExpanded);

        // 드롭다운 메뉴의 보임/숨김 토글
        layerMember.style.display = isExpanded ? "none" : "block";
    });

    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener("click", function (event) {
        if (
            !btnService.contains(event.target) &&
            !layerMember.contains(event.target)
        ) {
            btnService.setAttribute("aria-expanded", "false"); // 상태를 닫힘으로 설정
            layerMember.style.display = "none"; // 드롭다운 메뉴 숨김
        }
    });
});
