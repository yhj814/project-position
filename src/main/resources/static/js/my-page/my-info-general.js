// 테스트 용
// 비밀번호 틀리면 alert창으로 경고창 띄우기
document
    .querySelector(".BtnType.SizeL.btn-submit")
    .addEventListener("click", function () {
        // HTML에서 아이디와 비밀번호 가져오기
        const username = document.querySelector(".usrid").textContent.trim();
        const passwordInput = document.getElementById("password").value;

        // 임의의 올바른 비밀번호 설정
        const correctPassword = "1234"; // 원하는 비밀번호로 설정

        // 비밀번호 비교 및 처리
        if (passwordInput === correctPassword) {
            // 비밀번호가 일치하면 페이지 이동
            window.location.href = "welcome.html"; // 이동할 페이지 경로
        } else {
            // 비밀번호가 일치하지 않으면 경고창 띄우기
            alert("비밀번호가 일치하지 않습니다.");
        }
    });

// 사이드바 선택
document.querySelectorAll(".only").forEach((button) => {
    button.addEventListener("click", function () {
        // 모든 버튼에서 'selected' 클래스 제거
        document
            .querySelectorAll(".only")
            .forEach((btn) => btn.classList.remove("selected"));

        // 현재 클릭된 버튼에 'selected' 클래스 추가
        this.classList.add("selected");
    });
});
