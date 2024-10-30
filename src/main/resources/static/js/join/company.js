// 모든 typoBox 요소 선택
const typoBoxes = document.querySelectorAll(".typoBox");
const passwordInput = document.querySelector("#password1");
const passwordWarn = document.querySelector("#password1-warning-txt"); // 일반 경고
const corpCodeInput = document.getElementById("corp-code");
const msgCorpCode = document.getElementById("msg-corp-code");
const typoBox = corpCodeInput.closest(".typo-box");
const areaInputCompany = document.getElementById("area-input-company"); // 기업명 입력 영역
const idMessage = document.querySelector("#id-check-msg1");
const idMessageCheck = document.querySelector("#id-check-msg2");
const idMessageSafe = document.querySelector("#id-check-msg3");
const idInput = document.querySelector("#id");


const companyFile = document.getElementById("confirm-document-file");
const checks = {corpCodeCheck: false, companyNameCheck: false, ceoNameCheck: false, addressCheck: false, openDateCheck: false, homepageCheck:false, saleCheck: false, passwordCheck: false, employeesNumberCheck: false};


// 주소
const addressMain = document.getElementById("address-main");

addressMain.addEventListener("click", (e) => {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            addressMain.value = roadAddr;
        }
    }).open();
});
// ################################################################################

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
    checks.corpCodeCheck = false;

    const corpCode = corpCodeInput.value;
    if (validateCorpCode(corpCode)) {
        checks.corpCodeCheck = true;
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
idInput.addEventListener("blur", async (e) => {
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    checks.idCheck = false;
    idMessageSafe.style.display = "none";
    idMessageCheck.style.display = "none";

    if(!emailReg.test(e.target.value)) {
        idMessage.style.display = "block";
        return;
    }

    idMessage.style.display = "none";

    await companyService.checkId(e.target.value, (result) => {
        if(result) {
            idMessageCheck.style.display = "block";
        }else{
            idMessageSafe.style.display = "block";
            checks.idCheck = true;
        }
    });
});

passwordInput.addEventListener("blur", (e) => {
    const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    passwordWarn.style.display = "none";
    checks.passwordCheck = false;

    if(!passwordReg.test(e.target.value)) {
        passwordWarn.style.display = "block";
        return;
    }
    checks.passwordCheck = true;
});

// 파일
const uuid = document.getElementById("uuid");
const path = document.getElementById("path");

companyFile.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if(file.type.startsWith("image")){
        const formData = new FormData();
        formData.append("file", file);
        const fileInfo = await companyService.upload(formData);
        console.log(fileInfo);
        uuid.value = fileInfo.fileName.substring(0, fileInfo.fileName.indexOf("_"));
        path.value = fileInfo.filePath;
    }else{
        alert("이미지 파일이 아닙니다.");
        e.target.value = "";
    }
    // ths[i].src = `/file/display?fileName=${fileInfo.filePath + "/t_" + fileInfo.fileName}`;
});

// 기타 유효성
const companyNameInput = document.getElementById("company-nm");
const ceoNameInput = document.getElementById("ceo-nm");
const openDateInput = document.getElementById("open-date");
const homepageInput = document.getElementById("company-hp");
const saleInput = document.getElementById("company-s");
const employeesNumberInput = document.getElementById("employees-number");


addressMain.addEventListener("blur", (e) => {
    checks.addressCheck = false;

    if(e.target.value){
        checks.addressCheck = true;
    }
});

companyNameInput.addEventListener("blur", (e) => {
    checks.companyNameCheck = false;

    if(e.target.value){
        checks.companyNameCheck = true;
    }
});

ceoNameInput.addEventListener("blur", (e) => {
    checks.ceoNameCheck = false;

    if(e.target.value){
        checks.ceoNameCheck = true;
    }

});

openDateInput.addEventListener("blur", (e) => {
    checks.openDateCheck = false;

    if(e.target.value){
        checks.openDateCheck = true;
    }

});

homepageInput.addEventListener("blur", (e) => {
    checks.homepageCheck = false;

    if(e.target.value){
        checks.homepageCheck = true;
    }

});

saleInput.addEventListener("blur", (e) => {
    checks.saleCheck = false;

    if(e.target.value){
        checks.saleCheck = true;
    }
});

employeesNumberInput.addEventListener("blur", (e) => {
    checks.employeesNumberCheck = false;

    if(e.target.value){
        checks.employeesNumberCheck = true;
    }
});

// 회원가입 전송
const button = document.getElementById("btn-submit");

button.addEventListener("click", (e) => {
    console.log(Object.values(checks).filter((value) => !value));
    if(Object.values(checks).filter((value) => !value).length == 0){
        document["c-frm"].submit();
    }
});