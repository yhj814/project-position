listBody.addEventListener("click", (e) => {
    // 클릭된 요소가 btn-history 클래스를 가진 버튼인지 확인합니다.
    if (e.target.classList.contains("btn-history")) {
        const button = e.target; // 클릭된 버튼을 저장합니다.
        const historyDiv = button.closest(".row").querySelector(".col-history"); // 관련된 history div를 찾습니다.

        // historyDiv가 현재 보이는지 확인합니다.
        const isVisible = historyDiv.style.display === "block";

        // 모든 history div를 숨기고 모든 버튼에서 active 클래스를 제거합니다.
        const histories = listBody.querySelectorAll(".col-history");
        histories.forEach((history) => {
            history.style.display = "none"; // 모든 history div 숨기기
        });

        const buttons = listBody.querySelectorAll(".btn-history");
        buttons.forEach((btn) => {
            btn.classList.remove("active"); // 모든 버튼에서 active 클래스 제거
        });

        // 클릭된 history div의 상태를 토글합니다.
        if (isVisible) {
            historyDiv.style.display = "none"; // 이미 보이면 숨깁니다.
        } else {
            historyDiv.style.display = "block"; // 보이지 않으면 보여줍니다.
            button.classList.add("active"); // 클릭된 버튼에 active 클래스 추가
        }
    }
    if(e.target.classList.contains("complain-btn")){
        const applyId = e.target.closest(".complain-btn").getAttribute("data-id");
        location.href = `/corporation/complain?id=${applyId}`;
    }
    if(e.target.classList.contains("write-review")){
        const applyId = e.target.closest(".write-review").getAttribute("data-id");
        location.href = `/corporation/position-review?id=${applyId}`;
    }

});


