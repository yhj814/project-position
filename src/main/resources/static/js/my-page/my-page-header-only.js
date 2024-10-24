// btn-member 버튼 클릭 시 동작
document.querySelectorAll(".btn-member").forEach((button) => {
    button.addEventListener("click", () => {
        // 클릭된 버튼에 expanded 클래스 토글
        button.classList.toggle("expanded");

        // top-btn 또는 btn-alarm에서 on 클래스 모두 제거
        document
            .querySelectorAll(".top-btn.on, .btn-alarm.on")
            .forEach((btn) => {
                btn.classList.remove("on");
            });
    });
});

// top-btn 또는 btn-alarm 버튼 클릭 시 동작
document.querySelectorAll(".top-btn, .btn-alarm").forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("on")) {
            // 이미 on 클래스가 있을 경우 제거
            button.classList.remove("on");
        } else {
            // 다른 모든 버튼에서 on 클래스 제거 후 클릭된 버튼에 추가
            document
                .querySelectorAll(".top-btn.on, .btn-alarm.on")
                .forEach((btn) => {
                    btn.classList.remove("on");
                });
            button.classList.add("on");
        }

        // 모든 btn-member에서 expanded 클래스 제거
        document.querySelectorAll(".btn-member.expanded").forEach((btn) => {
            btn.classList.remove("expanded");
        });
    });
});

// 페이지의 다른 곳 클릭 시 모든 클래스 제거
document.addEventListener("click", (event) => {
    const expandedMember = document.querySelector(".btn-member.expanded");
    const activeButton = document.querySelector(".top-btn.on, .btn-alarm.on");

    // 모든 .top-layer-assist 요소를 가져옵니다.
    const assistLayers = document.querySelectorAll(".top-layer-assist");

    // 열린 영역 내부를 클릭한 경우 종료
    const isInsideExpanded =
        expandedMember && expandedMember.contains(event.target);
    const isInsideActiveButton =
        activeButton && activeButton.contains(event.target);

    // 클릭된 요소가 어떤 .top-layer-assist 내부에 있는지 확인
    const isInsideAssistLayer = Array.from(assistLayers).some((layer) =>
        layer.contains(event.target)
    );

    if (isInsideExpanded || isInsideActiveButton || isInsideAssistLayer) {
        return; // 열린 영역 내부 클릭 시 클래스 유지
    }

    // 열린 영역 외부 클릭 시 클래스 제거
    if (expandedMember) expandedMember.classList.remove("expanded");
    if (activeButton) activeButton.classList.remove("on");
});

// 나의 활동 내역 토글
document.querySelectorAll(".activity-name").forEach((element) => {
    element.addEventListener("click", () => {
        if (element.classList.contains("off")) {
            element.classList.remove("off");
        }
        element.classList.toggle("on");
    });
});

document.querySelectorAll(".tab-btns li").forEach((tab) => {
    tab.addEventListener("click", () => {
        // 모든 <li> 요소에서 'selected' 클래스 제거
        document.querySelectorAll(".tab-btns li").forEach((li) => {
            li.classList.remove("selected");
        });

        // 클릭한 <li> 요소에 'selected' 클래스 추가
        tab.classList.add("selected");
    });
});

function showTab(type) {
    // 모든 영역을 숨기기
    document.getElementById("scrap-list-area").style.display = "none";
    document.getElementById("suited-list-area").style.display = "none";
    document.getElementById("favor-list-area").style.display = "none";

    // 클래스 요소도 모두 숨기기
    document.querySelectorAll(".BtnType.SizeM.page-link").forEach((element) => {
        element.style.display = "none";
    });

    // 선택된 영역 및 관련 클래스 요소 표시
    if (type === "scrap") {
        document.getElementById("scrap-list-area").style.display = "block";
        document.querySelector(".scrap-recruit-view").style.display = "block";
    } else if (type === "suited") {
        document.getElementById("suited-list-area").style.display = "block";
        document.querySelector(".suited-recruit-view").style.display = "block";
    } else if (type === "favor-company") {
        document.getElementById("favor-list-area").style.display = "block";
        document.querySelector(".favor-recruit-view").style.display = "block";
    }
}
