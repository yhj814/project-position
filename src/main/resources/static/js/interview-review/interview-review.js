document.querySelectorAll(".interview-box-review").forEach((item) => {
    item.addEventListener("click", () => {
        // 클릭한 요소가 이미 open 상태인지 확인
        const isOpen = item.classList.contains("open");

        // 모든 요소의 open 클래스를 제거
        document.querySelectorAll(".interview-box-review").forEach((el) => {
            el.classList.remove("open");
        });

        // 클릭한 요소가 원래 닫혀있었다면 다시 open 클래스 추가
        if (!isOpen) {
            item.classList.add("open");
        }
    });
});
