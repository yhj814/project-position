// 남은 일수를 계산하는 함수
function calculateDaysLeft(endDate) {
    const today = new Date();
    const end = new Date(endDate);

    // 마감일까지의 차이를 밀리초로 계산
    const difference = end - today;

    // 차이를 일수로 계산
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

// 남은 일수를 계산
const daysLeft = calculateDaysLeft(noticeEndDate);

// 남은 일수에 따라 D- 형식을 업데이트
document.addEventListener("DOMContentLoaded", function() {
    const ddayDisplay = document.getElementById("dday-display");
    if (daysLeft > 0) {
        ddayDisplay.innerHTML = `D-${daysLeft}`;
    } else if (daysLeft === 0) {
        ddayDisplay.innerHTML = `D-DAY`;
    } else {
        ddayDisplay.innerHTML = `마감`;
    }
});