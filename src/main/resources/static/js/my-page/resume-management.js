// 모든 더보기 버튼
document
    .querySelectorAll(".more-btn")
    .forEach((button) =>
        button.addEventListener("click", () => button.classList.toggle("on"))
    );

// 테스트
// 현재 시간을 "YYYY.MM.DD HH:mm 수정" 형식으로 반환하는 함수
function getCurrentTimeString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes} 수정`;
}

// 버튼에 클릭 이벤트 핸들러 추가
document
    .querySelector(".btnText.btn-action.ga-event")
    .addEventListener("click", () => {
        const dateElement = document.querySelector(".date");
        if (dateElement) {
            dateElement.textContent = getCurrentTimeString();
        }
    });
