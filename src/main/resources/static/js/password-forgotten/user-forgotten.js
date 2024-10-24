const idInput = document.querySelector("#id");
const idMessage = document.querySelector("#msg_id");
const nameInput = document.querySelector("#name");
const nameMessage = document.querySelector("#msg_name");
const birthdayInput = document.querySelector("#birthday");
const birthdayMessage = document.querySelector("#msg_birthday");
const cellNumberInput = document.querySelector("#cell");
const cellNumberMessage = document.querySelector("#msg_cell");
const userEmailInput = document.querySelector("#email");
const userEmailMessage = document.querySelector("#msg_mail");
const certInput = document.querySelector("#findCite");
const certMessageFail = document.querySelector("#msg_cert_num_fail");
const expiredMessage = document.querySelector("#msg_cert_num");

let timer;
let isCodeSent = false; // 인증번호 발송 여부 추적

const certButton = document.querySelector("#li_cell .btn_cert");
const emailSendButton = document.querySelector("#li_mail .btn_cert");
const certConfirmButton = document.querySelector("#btn_cert_complete");
const timeDisplay = document.querySelector(".time_find");
const remainTimeText = document.querySelector("#confirm_remain_time");
const sendSMSMessage = document.querySelector("#msg_cell1");
const sendEmailMessage = document.querySelector("#msg_mail_sent");
const certSuccessMessage = document.querySelector(".message_find.ok");

// 인증 확인 버튼 초기 비활성화
certConfirmButton.disabled = true;

// 탭 전환 이벤트
const cellTab = document.querySelector("#find_sell");
const emailTab = document.querySelector("#find_mail");
const cellInput = document.querySelector("#li_cell");
const emailInput = document.querySelector("#li_mail");

cellTab.addEventListener("click", () => toggleTabs(true));
emailTab.addEventListener("click", () => toggleTabs(false));

function toggleTabs(isCell) {
    cellTab.classList.toggle("on", isCell);
    emailTab.classList.toggle("on", !isCell);
    cellInput.style.display = isCell ? "block" : "none";
    emailInput.style.display = isCell ? "none" : "block";
}

// 이메일 입력 시 자동완성 주소창
const enterMail = document.querySelector(".box_input > #email");
const showAddress = document.querySelector(".suggest_email");
const emailLinks = document.querySelectorAll(".link_email");
const suggestionItems = document.querySelectorAll(".txt_email");

enterMail.addEventListener("input", () => {
    if (enterMail.value) {
        showAddress.style.display = "block";
        updateEmailSuggestions(enterMail.value);
    } else {
        showAddress.style.display = "none";
    }
});

function updateEmailSuggestions(inputValue) {
    suggestionItems.forEach((item) => {
        item.textContent = inputValue;
    });
}

emailLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const emailPart = link.querySelector(".txt_email").textContent.trim();
        const domainPart = link.textContent.replace(emailPart, "").trim();
        enterMail.value = `${emailPart}${domainPart}`;
        showAddress.style.display = "none";
    });
});

// ******** 유효성 검사 함수들 ********
function validateId() {
    const idPattern = /^[a-zA-Z0-9_]{4,20}$/;
    const isValid = idPattern.test(idInput.value);
    idMessage.style.display = isValid ? "none" : "block";
    return isValid;
}

function validateName() {
    const namePattern = /^[가-힣a-zA-Z\s]+$/;
    const isValid = namePattern.test(nameInput.value);
    nameMessage.style.display = isValid ? "none" : "block";
    return isValid;
}

function validateBirthday() {
    const birthdayPattern = /^\d{8}$/;
    const isValid = birthdayPattern.test(birthdayInput.value);
    birthdayMessage.style.display = isValid ? "none" : "block";
    return isValid;
}

function validateCell() {
    const cellNumberPattern = /^\d{11}$/;
    const isValid = cellNumberPattern.test(cellNumberInput.value);
    cellNumberMessage.style.display = isValid ? "none" : "block";
    return isValid;
}

function validateEmail() {
    const emailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    const isValid = emailPattern.test(userEmailInput.value);
    userEmailMessage.style.display = isValid ? "none" : "block";
    return isValid;
}

function validateCertNumber() {
    const certPattern = /^\d{4,6}$/;
    const isValid = certPattern.test(certInput.value);
    certMessageFail.style.display = isValid ? "none" : "block";
    return isValid;
}

// ******** 인증번호 발송 이벤트 ********
certButton.addEventListener("click", () => {
    if (checkAllInputsValid("cell")) {
        sendSMSMessage.style.display = "block";
        startCountdown();
        isCodeSent = true;
        certConfirmButton.disabled = false;
    } else {
        alert("모든 필드를 올바르게 입력해 주세요.");
    }
});

emailSendButton.addEventListener("click", () => {
    if (checkAllInputsValid("email")) {
        sendEmailMessage.style.display = "block";
        startCountdown();
        isCodeSent = true;
        certConfirmButton.disabled = false;
    } else {
        alert("모든 필드를 올바르게 입력해 주세요.");
    }
});

// ******** 인증 확인 버튼 클릭 이벤트 ********
certConfirmButton.addEventListener("click", () => {
    if (!isCodeSent) {
        alert("먼저 인증번호를 발송해 주세요.");
        return;
    }

    if (validateCertNumber()) {
        clearInterval(timer);
        timeDisplay.style.display = "none";
        certSuccessMessage.style.display = "block";
        alert("인증이 완료되었습니다.");
    } else {
        alert("유효한 인증번호를 입력해 주세요.");
        certInput.focus();
    }
});

// ******** 타이머 시작 함수 ********
function startCountdown() {
    let timeRemaining = 180;

    clearInterval(timer);
    timeDisplay.style.display = "block";
    expiredMessage.style.display = "none";

    timer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        remainTimeText.textContent = `${minutes}:${
            seconds < 10 ? "0" : ""
        }${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            timeDisplay.style.display = "none";
            expiredMessage.style.display = "block";
        }

        timeRemaining--;
    }, 1000);
}

// ******** 입력값 유효성 검사 확인 함수 ********
function checkAllInputsValid(type) {
    const isValid =
        validateId() &&
        validateName() &&
        validateBirthday() &&
        (type === "cell" ? validateCell() : validateEmail());
    return isValid;
}

// 각 입력 필드에 실시간 유효성 검사 연결
idInput.addEventListener("input", validateId);
nameInput.addEventListener("input", validateName);
birthdayInput.addEventListener("input", validateBirthday);
cellNumberInput.addEventListener("input", validateCell);
userEmailInput.addEventListener("input", validateEmail);
