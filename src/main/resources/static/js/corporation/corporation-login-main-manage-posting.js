document.addEventListener("DOMContentLoaded", function () {
    //     // 이 부분 위에 비동기 하셔야합니다. 지금 마감 누르면 이 js 작동 되는데,
    //     // 진행중에서 마감으로 넘어가는 그 사이에 아래 if(tabBox) 가 들어가야합니다
    //     // 꼭 참고해주세요
    // TabBox 클릭 이벤트 설정
    const tabBox = document.querySelector(".TabBox");
    if (tabBox) {
        tabBox.addEventListener("click", function (event) {
            const clickedButton = event.target.closest(".BtnType");

            if (clickedButton) {
                console.log("Clicked button:", clickedButton);
                console.log("Parent li:", clickedButton.parentElement);

                // 모든 li에서 Select 클래스 제거
                document.querySelectorAll(".TabBox li").forEach((li) => {
                    li.classList.remove("Select");
                });

                // 클릭된 버튼의 부모 li에 Select 클래스 추가
                clickedButton.parentElement.classList.add("Select");

                // 로딩 화면 보이기
                const loadingDiv = document.getElementById("ingRecruitLoading");
                if (loadingDiv) {
                    loadingDiv.style.display = "block";

                    // 공고 데이터 불러오는 시간 시뮬레이션 (300ms)
                    setTimeout(() => {
                        loadingDiv.style.display = "none";
                    }, 300);
                }
            }
        });
    }

    const buttons = document.querySelectorAll(".btn-history");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // 클릭된 버튼의 data-recruitapply-idx 값 가져오기
            const recruitApplyIdx = button.getAttribute(
                "data-recruitapply-idx"
            );

            // 해당 data-recruitapply-idx 값을 가진 .col-history 찾기
            const historyDiv = document.querySelector(
                `.col-history[data-recruitapply-idx="${recruitApplyIdx}"]`
            );

            // 현재 보여지고 있는지 확인
            const isVisible = historyDiv.style.display === "block";

            // 현재 클릭된 항목 외에 모든 .col-history 숨기기 및 버튼 스타일 원상태로
            document.querySelectorAll(".col-history").forEach((history) => {
                if (history !== historyDiv) {
                    history.style.display = "none";
                }
            });
            document.querySelectorAll(".btn-history").forEach((btn) => {
                btn.classList.remove("active"); // 버튼에서 active 클래스 제거
            });

            // 현재 클릭된 항목 토글 (열려 있으면 닫고, 닫혀 있으면 엶)
            if (isVisible) {
                historyDiv.style.display = "none"; // 이미 열려 있으면 닫기
            } else {
                historyDiv.style.display = "block"; // 닫혀 있으면 열기
                button.classList.add("active"); // 버튼에 active 클래스 추가
            }
        });
    });
});
