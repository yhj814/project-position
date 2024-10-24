// 모든 Lbl 요소를 선택
const labels = document.querySelectorAll(".Lbl");

labels.forEach((label) => {
    label.addEventListener("click", function () {
        // 각 폼을 숨기기
        document.getElementById("sms-confirm-form").style.display = "none";
        document.getElementById("email-confirm-form").style.display = "none";

        // 클릭한 라벨에 따라 해당 폼만 보이기
        if (label.getAttribute("for") === "confirm-sms") {
            document.getElementById("sms-confirm-form").style.display = "block";
        } else if (label.getAttribute("for") === "confirm-email") {
            document.getElementById("email-confirm-form").style.display =
                "block";
        }
    });
});

// 전화번호 유효성 검사
document.getElementById("cell").addEventListener("input", function () {
    const cellInput = document.getElementById("cell");
    const cellMessage = document.getElementById("cell-message");

    // 입력 값 가져오기
    const cellValue = cellInput.value.trim();

    // 유효성 검사
    const isValid =
        /^[0-9]{10,11}$/.test(cellValue) && cellValue.startsWith("010");

    if (cellValue === "") {
        // 입력이 비어 있는 경우: 모든 상태 초기화
        cellInput.classList.remove("Invalid"); // Invalid 클래스 제거
        cellMessage.style.display = "none"; // 메시지 숨김
    } else if (!isValid) {
        // 유효하지 않은 경우
        cellInput.classList.add("Invalid"); // Invalid 클래스 추가
        cellMessage.style.display = "block"; // 메시지 표시
    } else {
        // 유효한 경우
        cellInput.classList.remove("Invalid"); // Invalid 클래스 제거
        cellMessage.style.display = "none"; // 메시지 숨김
    }
});

// // 인증번호 유효성 검사
// document.getElementById("sms-code").addEventListener("input", function () {
//     const smsCodeInput = document.getElementById("sms-code");
//     const smsCodeMessage = document.getElementById("sms-code-message");
//     const smsConfirmBtn = document.getElementById("sms-confirm-btn");

//     // 입력 값 가져오기
//     const smsCodeValue = smsCodeInput.value.trim();

//     // 유효성 검사: 6자리 숫자만
//     const isValid = /^\d{6}$/.test(smsCodeValue);

//     if (smsCodeValue === "") {
//         // 입력이 비어 있는 경우: 모든 상태 초기화
//         smsCodeInput.classList.remove("Invalid"); // Invalid 클래스 제거
//         smsCodeMessage.style.display = "none"; // 메시지 숨김
//         smsConfirmBtn.disabled = true; // 버튼 비활성화
//     } else if (!isValid) {
//         // 유효하지 않은 경우
//         smsCodeInput.classList.add("Invalid"); // Invalid 클래스 추가
//         smsCodeMessage.style.display = "block"; // 메시지 표시
//         smsConfirmBtn.disabled = true; // 버튼 비활성화
//     } else {
//         // 유효한 경우
//         smsCodeInput.classList.remove("Invalid"); // Invalid 클래스 제거
//         smsCodeMessage.style.display = "none"; // 메시지 숨김
//         smsConfirmBtn.disabled = false; // 버튼 활성화
//     }
// });

// 인증번호 유효성 검사 함수
function validateInput(inputId, messageId, buttonId) {
    const inputElement = document.getElementById(inputId);
    const messageElement = document.getElementById(messageId);
    const buttonElement = document.getElementById(buttonId);

    // 입력 값 가져오기
    const inputValue = inputElement.value.trim();

    // 유효성 검사: 6자리 숫자만
    const isValid = /^\d{6}$/.test(inputValue);

    if (inputValue === "") {
        inputElement.classList.remove("Invalid"); // Invalid 클래스 제거
        messageElement.style.display = "none"; // 메시지 숨김
        buttonElement.disabled = true; // 버튼 비활성화
    } else if (!isValid) {
        inputElement.classList.add("Invalid"); // Invalid 클래스 추가
        messageElement.style.display = "block"; // 메시지 표시
        buttonElement.disabled = true; // 버튼 비활성화
    } else {
        inputElement.classList.remove("Invalid"); // Invalid 클래스 제거
        messageElement.style.display = "none"; // 메시지 숨김
        buttonElement.disabled = false; // 버튼 활성화
    }
}

// SMS 코드 유효성 검사
document.getElementById("sms-code").addEventListener("input", function () {
    validateInput("sms-code", "sms-code-message", "sms-confirm-btn");
});

// 이메일 코드 유효성 검사
document.getElementById("email-code").addEventListener("input", function () {
    validateInput("email-code", "email-code-message", "email-confirm-btn");
});

// 이메일 유효성 검사
document.getElementById("email").addEventListener("input", function () {
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("email-message");

    // 입력 값 가져오기
    const emailValue = emailInput.value.trim();

    // 이메일 유효성 검사: 기본 정규 표현식 사용
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (emailValue === "") {
        // 입력이 비어 있는 경우: 모든 상태 초기화
        emailInput.classList.remove("Invalid"); // Invalid 클래스 제거
        emailMessage.style.display = "none"; // 메시지 숨김
    } else if (!isValid) {
        // 유효하지 않은 경우
        emailInput.classList.add("Invalid"); // Invalid 클래스 추가
        emailMessage.style.display = "block"; // 메시지 표시
    } else {
        // 유효한 경우
        emailInput.classList.remove("Invalid"); // Invalid 클래스 제거
        emailMessage.style.display = "none"; // 메시지 숨김
    }
});
// InpBox 클래스를 가진 모든 요소 선택
const inpBoxes = document.querySelectorAll(".InpBox");

inpBoxes.forEach((inpBox) => {
    inpBox.addEventListener("click", function () {
        // social-check 클래스를 가진 모든 요소 선택
        const socialChecks = document.querySelectorAll(".social-check");

        // 모든 social-check에서 .line-bottom 클래스 제거
        socialChecks.forEach((socialCheck) => {
            socialCheck.classList.remove("line-bottom");
        });

        // 클릭된 라벨의 id 확인
        const label = this.querySelector("label");
        if (label.getAttribute("for") === "confirm-email") {
            // confirm-email 클릭 시 부모 social-check에 .line-bottom 추가
            const socialCheck = label.closest(".social-check");
            socialCheck.classList.remove("line");
            socialCheck.classList.add("line-bottom");
        } else if (label.getAttribute("for") === "confirm-sms") {
            // confirm-sms 클릭 시 아래에 있는 social-check에 .line-bottom 추가
            const nextSocialCheck =
                socialChecks[
                    Array.from(socialChecks).indexOf(
                        label.closest(".social-check")
                    ) + 1
                ];
            if (nextSocialCheck) {
                nextSocialCheck.classList.add("line");
            }
        }
    });
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
