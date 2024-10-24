document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".list-item-menu-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            const menu = this.nextElementSibling; // 버튼 바로 다음에 위치한 .list-item-menu div를 선택
            if (menu.classList.contains("list-item-menu")) {
                if (menu.style.display === "block") {
                    menu.style.display = "none"; // 이미 열려 있으면 닫기
                } else {
                    // 다른 열린 메뉴 닫기
                    document
                        .querySelectorAll(".list-item-menu")
                        .forEach(function (openMenu) {
                            openMenu.style.display = "none";
                        });
                    menu.style.display = "block"; // 클릭한 버튼의 메뉴 열기
                }
            }
        });
    });

    document
        .querySelectorAll(".list-item-menu-delete")
        .forEach(function (button) {
            button.addEventListener("click", function () {
                const confirmDelete = confirm("자기소개서를 삭제하시겠습니까?");
                if (confirmDelete) {
                    // 여기서 삭제 작업을 수행합니다.
                    alert("삭제가 완료되었습니다."); // 실제 삭제 처리가 끝난 후에 표시
                } else {
                    // 취소를 선택한 경우 아무 작업도 하지 않음
                    alert("삭제가 취소되었습니다.");
                }
            });
        });
});
