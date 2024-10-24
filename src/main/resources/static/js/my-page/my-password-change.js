// 모든 btn-toggle 버튼과 그 부모 요소를 선택합니다.
document.querySelectorAll(".type-button").forEach((wrapper) => {
    const input = wrapper.querySelector("input"); // 해당 버튼의 input
    const button = wrapper.querySelector(".btn-toggle"); // 해당 버튼
    const icon = button.querySelector("use"); // 아이콘 SVG

    button.addEventListener("click", () => {
        // input 타입을 password와 text로 토글
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";

        // 아이콘을 #svg-my-57과 #svg-my-56으로 변경
        icon.setAttribute(
            "xlink:href",
            isPassword ? "#svg-my-56" : "#svg-my-57"
        );
    });
});

// 비밀번호 유효성 검사
const passwordInput = document.getElementById("password1");
const verifiedResult = document.querySelector(".verified-result");
const verifiedText = document.querySelector(".verified-result-text");
const icon = document.querySelector(".btn-toggle use");

// 비밀번호 토글 기능
document.querySelector(".btn-toggle").addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    icon.setAttribute("xlink:href", isPassword ? "#svg-my-56" : "#svg-my-57");
});

// 비밀번호 입력 시 유효성 검사
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const level = validatePassword(password);

    // 단계별 클래스 및 메시지 업데이트
    updateVerifiedResult(level);
});

// 비밀번호 강도 검사 함수
function validatePassword(password) {
    let level = 0;

    if (password.length >= 8 && password.length <= 16) level++; // 길이 조건
    if (/[A-Z]/.test(password)) level++; // 대문자 포함
    if (/[a-z]/.test(password)) level++; // 소문자 포함
    if (/\d/.test(password)) level++; // 숫자 포함
    if (/[^A-Za-z0-9]/.test(password)) level++; // 특수문자 포함

    return Math.min(level, 5); // 최대 레벨은 5로 제한
}

// 단계별 클래스 및 메시지 업데이트 함수
function updateVerifiedResult(level) {
    verifiedResult.className = `verified-result level-${level}`;
    let message = "";

    switch (level) {
        case 1:
        case 2:
            message =
                "8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.";
            break;
        case 3:
            message = "사용가능한 비밀번호입니다. (안전성 강도 보통)";
            break;
        case 4:
            message = "사용가능한 비밀번호입니다. (안전성 강도 강함)";
            break;
        case 5:
            message = "사용가능한 비밀번호입니다. (안전성 강도 매우 강함)";
            break;
        default:
            message = "비밀번호를 입력하세요.";
    }
    verifiedText.textContent = message;
}

// 다시입력 버튼 클릭 시 초기화
document.getElementById("btnReset").addEventListener("click", (event) => {
    event.preventDefault(); // 기본 reset 동작 방지

    // 입력 필드 초기화
    document.querySelectorAll("input.Typo.SizeL").forEach((input) => {
        input.value = ""; // 입력 필드 비우기
        input.type = "password"; // 타입 초기화
    });

    // 강도 표시 초기화 (레벨 0으로 설정)
    updateVerifiedResult(0);
});
