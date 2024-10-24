// 모든 typoBox 요소 선택
const typoBoxes = document.querySelectorAll(".typoBox");
const passwordInput = document.querySelector("#password1");
const passwordWarn = document.querySelector("#password1-warning-txt"); // 일반 경고
const passwordRepWarn = document.querySelector("#password1-warning-txt-rep"); // 반복 문자 경고
const passwordSafe = document.querySelector("#password1-good-txt"); // 유효한 메시지
const passwordEye = document.querySelector("#masking-password"); // 눈알 버튼
const passwordFocus = document.querySelectorAll("#password1FocusMsg"); // 안내 문구
const passwordInputBox = document.querySelector(".pass-box"); // 부모 요소
const corpCodeInput = document.getElementById("corp-code");
const msgCorpCode = document.getElementById("msg-corp-code");
const typoBox = corpCodeInput.closest(".TypoBox");
const areaInputCompany = document.getElementById("area-input-company"); // 기업명 입력 영역
const idMessage = document.querySelector("#idCheckMsg1");
const idMessageSafe = document.querySelector("#idCheckMsg2");
const idInput = document.querySelector("#id");

// 각 typoBox에 포커스 이벤트 추가
typoBoxes.forEach((typoBox) => {
    const input = typoBox.querySelector("input"); // typoBox 안의 input 요소 찾기

    if (input) {
        // input 요소에 포커스 이벤트 추가
        input.addEventListener("focus", () => {
            typoBox.classList.add("invalid"); // 포커스 시 invalid 클래스 추가
        });

        // input 요소에 포커스 해제(blur) 시 invalid 제거
        input.addEventListener("blur", () => {
            if (input.value.trim() !== "") {
                typoBox.classList.remove("invalid"); // 값이 있으면 invalid 제거
            }
        });
    }
});

// ==========================================================

// 사업자등록번호 유효성 검사 함수 (한국 공식)
const validateCorpCode = (code) => {
    const cleanCode = code.replace(/-/g, ""); // '-' 제거
    if (cleanCode.length !== 10) return false; // 10자리가 아니면 유효하지 않음

    const weights = [1, 3, 7, 1, 3, 7, 1, 3, 5]; // 가중치 배열
    let sum = 0;

    // 가중치에 따른 합 계산
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cleanCode[i], 10) * weights[i];
    }

    // 9번째 자리(5 곱한 결과의 1의 자리) 추가
    sum += Math.floor((parseInt(cleanCode[8], 10) * 5) / 10);

    // 10에서 (합 % 10)을 뺀 값이 마지막 자리와 일치해야 함
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit === parseInt(cleanCode[9], 10);
};

// 숫자와 '-' 이외의 문자를 입력 시 필터링 및 자동 하이픈 추가
corpCodeInput.addEventListener("input", () => {
    let value = corpCodeInput.value.replace(/[^0-9]/g, ""); // 숫자 외 문자 제거

    if (value.length > 10) {
        value = value.slice(0, 10); // 최대 10자리까지만 입력 허용
    }

    // 자동 하이픈 추가 (000-00-00000 형식)
    if (value.length >= 3 && value.length < 5) {
        value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length >= 5) {
        value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
    }

    corpCodeInput.value = value;
});

// 입력 필드에서 벗어날 때 유효성 검사 실행
corpCodeInput.addEventListener("blur", () => {
    const corpCode = corpCodeInput.value;

    if (validateCorpCode(corpCode)) {
        msgCorpCode.textContent =
            "사업자등록번호 확인완료, 기업인증에 사업자등록증명원을 첨부해 주세요.";
        msgCorpCode.classList.remove("msgInvalid");
        msgCorpCode.classList.add("alert-column", "good-txt");
        typoBox.classList.remove("invalid");

        // 기업명 입력 영역 보이기
        areaInputCompany.style.display = "block";
    } else {
        msgCorpCode.textContent = "유효하지 않은 사업자번호입니다.";
        msgCorpCode.classList.remove("alert-column", "good-txt");
        msgCorpCode.classList.add("msgInvalid");
        typoBox.classList.add("invalid");

        // 기업명 입력 영역 숨기기
        areaInputCompany.style.display = "none";
    }
});

// ==========================사업자등록증명원===========================
const certifyBtn = document.querySelector("#select-certification-file");
const certifyImage = document.querySelector(
    "#normal-corp-code-certification-notice"
);
const addImage = document.querySelector("#box-file-upload");
const closeBtn = document.querySelector("#btn-reset-certification");

certifyBtn.addEventListener("click", () => {
    certifyImage.style.display = "none";
    certifyBtn.style.display = "none";
    addImage.style.display = "block";
    closeBtn.style.display = "block";
});

// ===================================아이디 유효성 검사======================================

// 아이디 입력창 클릭 시 메시지 표시
idInput.addEventListener("focus", () => {
    idMessage.style.display = "block"; // 아이디 입력 안내 메시지 표시
});

// 입력값이 변경될 때 유효성 검사 수행
idInput.addEventListener("input", () => validateUserId());

// 모든 유효성 검사 메시지를 숨기는 함수
const hideIdValidationMessages = () => {
    idMessage.style.display = "none";
    idMessageSafe.style.display = "none";
    const idMessageWarn = document.querySelector("#idCheckMsgWarn");
    if (idMessageWarn) {
        idMessageWarn.style.display = "none";
    }
};

// 아이디 유효성 검사 함수
const validateUserId = () => {
    const idPattern = /^[a-zA-Z0-9-]{4,20}$/; // 4~20자 영문, 숫자, 밑줄 허용
    let isValid = idPattern.test(idInput.value); // 유효성 검사 결과

    if (isValid) {
        hideIdValidationMessages(); // 유효한 경우 모든 경고 메시지 숨기기
        idMessageSafe.style.display = "block"; // 사용 가능 메시지 표시
        typoBoxes.forEach((box) => box.classList.remove("invalid")); // invalid 제거
    } else {
        hideIdValidationMessages(); // 다른 메시지 숨기기
        const idMessageWarn = document.querySelector("#idCheckMsgWarn");
        idMessageWarn.style.display = "block"; // 경고 메시지 표시
        typoBoxes.forEach((box) => box.classList.add("invalid")); // TypoBox에 invalid 추가
    }

    return isValid; // 유효성 검사 결과 반환
};

// 포커스 해제 시 유효성 검사 결과 유지
idInput.addEventListener("blur", () => {
    validateUserId(); // 값이 있으면 유효성 검사 수행
});

// 각 typoBox에 클릭 이벤트 추가
typoBoxes.forEach((typoBox) => {
    typoBoxes.addEventListener("click", () => {
        const input = typoBox.querySelector("input");
        if (!input.value) {
            typoBoxes.classList.add("invalid"); // 입력값이 없을 경우 invalid 추가
        } else {
            typoBoxes.classList.remove("invalid"); // 입력값이 있으면 invalid 제거
        }
    });
});

// =======================================================================

// 비밀번호 입력 시 안내 메시지와 눈알 등장
passwordInput.addEventListener("focus", (e) => {
    // 경고 메시지가 표시 중이면 안내 문구를 숨김
    const isWarningVisible =
        passwordWarn.style.display === "block" ||
        passwordRepWarn.style.display === "block";

    if (!isWarningVisible) {
        passwordFocus[0].style.display = "block"; // 안내 문구 표시
        console.log(passwordFocus);
    } else {
        passwordFocus[0].style.display = "none"; // 경고 시 안내 문구 숨김
    }
});

// 비밀번호 입력 중 눈알 아이콘 표시
passwordInput.addEventListener("input", () => {
    if (passwordInput.value) {
        passwordEye.style.display = "block"; // 값이 있으면 눈알 표시
    } else {
        passwordEye.style.display = "none"; // 값이 없으면 눈알 숨김
    }
    validateUserPassword(); // 유효성 검사 실행
});

// 눈알 아이콘 클릭 시 비밀번호 표시 토글
passwordEye.addEventListener("click", () => {
    const isPasswordVisible = passwordInput.type === "text";
    passwordInput.type = isPasswordVisible ? "password" : "text"; // 토글
    passwordEye.classList.toggle("on", !isPasswordVisible); // 클래스 추가/제거
});

// 비밀번호 유효성 검사 함수
const validateUserPassword = () => {
    const password = passwordInput.value;
    const hasUpperCase = /[A-Z]/.test(password); // 대문자 포함 여부
    const hasLowerCase = /[a-z]/.test(password); // 소문자 포함 여부
    const hasNumber = /[0-9]/.test(password); // 숫자 포함 여부
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // 특수문자 포함 여부
    const isValidLength = password.length >= 8 && password.length <= 16;
    const hasRepeatedChars = /(.)\1\1/.test(password); // 연속된 동일 문자 검사

    const validCount = [
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar,
    ].filter(Boolean).length;

    let isValid = isValidLength && validCount >= 3 && !hasRepeatedChars; // 유효성 검사 결과

    if (hasRepeatedChars) {
        // 연속된 동일 문자가 있을 때
        passwordRepWarn.style.display = "block"; // 반복 문자 경고 표시
        passwordWarn.style.display = "none"; // 기본 경고 숨김
        passwordSafe.style.display = "none"; // 유효 메시지 숨김
        passwordFocus[1].style.display = "none";
        passwordInputBox.classList.add("invalid"); // invalid 클래스 추가
    } else if (isValid) {
        // 유효한 비밀번호일 때
        passwordRepWarn.style.display = "none"; // 반복 문자 경고 숨김
        passwordWarn.style.display = "none"; // 기본 경고 숨김
        passwordSafe.style.display = "block"; // 유효 메시지 표시
        passwordFocus[1].style.display = "none";
        passwordInputBox.classList.remove("invalid"); // invalid 클래스 제거
    } else {
        // 유효하지 않은 비밀번호일 때
        passwordRepWarn.style.display = "none"; // 반복 문자 경고 숨김
        passwordWarn.style.display = "block"; // 기본 경고 표시
        passwordSafe.style.display = "none"; // 유효 메시지 숨김
        passwordFocus[1].style.display = "none";
        passwordInputBox.classList.add("invalid"); // invalid 클래스 추가
    }

    return isValid; // 유효성 검사 결과 반환
};

// 경고 메시지 숨기기/표시 함수
const togglePasswordMessages = (show) => {
    passwordWarn.style.display = show ? "block" : "none";
    passwordRepWarn.style.display = show ? "block" : "none";
    passwordSafe.style.display = show ? "none" : "none";

    if (show) {
        passwordInputBox.classList.add("invalid"); // 경고 시 invalid 클래스 추가
    } else {
        passwordInputBox.classList.remove("invalid"); // 숨길 때 클래스 제거
    }
};

// ==================================체크박스===================================
const agreeAllCheckbox = document.querySelector("#hidden-check-all-company");
const mandatoryCheckboxes = document.querySelectorAll(
    ".agree-article.depth2 input[type='checkbox'][id^='agree-']"
); // 필수 항목
const optionalCheckboxes = document.querySelectorAll(
    ".agree-article.depth2 input[type='checkbox']:not([id^='agree-'])"
); // 선택 항목
const submitBtn2 = document.querySelector(".btn-input-complete"); // 회원가입 버튼

// 전체 동의 클릭 시 모든 항목 체크
agreeAllCheckbox.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    mandatoryCheckboxes.forEach((checkbox) => (checkbox.checked = isChecked));
    optionalCheckboxes.forEach((checkbox) => (checkbox.checked = isChecked));
});
// 전체 동의 상태 업데이트 함수
const updateAllAgreeStatus = () => {
    const allMandatoryChecked = [...mandatoryCheckboxes].every(
        (box) => box.checked
    );
    const allOptionalChecked = [...optionalCheckboxes].every(
        (box) => box.checked
    );
    agreeAllCheckbox.checked = allMandatoryChecked && allOptionalChecked;
};

// 필수 항목 변경 시 전체 동의 상태와 버튼 활성화 업데이트
mandatoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        updateAllAgreeStatus();
        refreshSubmitButtonState();
    });
});

// 선택 항목 변경 시 전체 동의 상태 업데이트
optionalCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateAllAgreeStatus);
});

// ================================업종 선택==================================
