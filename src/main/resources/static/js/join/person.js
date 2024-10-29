const modalCloseBtn = document.querySelector(".btn-close");
const modalWindow = document.querySelector("#p-member-nudge");
const ageBasisContent = document.querySelector(".collection-basis-contents");
const basisClose = document.querySelector(".btn-close-birth-date-msg");
const basisOpen = document.querySelector(".btn-birth-date-msg");

const nameInput = document.getElementById("name");
const nameMessageWarn = document.getElementById("name-check-msg");

const idInput = document.querySelector("#id");
const idMessageWarn = document.querySelector("#id-check-msg1"); // 유효성 검사 빨간 글씨
const idMessageRep = document.querySelector("#id-check-msg2"); // 아이디 중복 빨간 글씨
const idMessageSafe = document.querySelector("#id-check-msg3"); // 사용 가능 아이디 문구
const idInputBox = document.querySelector(".typo-box"); // typo-box 선택

const phoneInput = document.getElementById("sms-cellnum");
const phoneMessageSafe = document.getElementById("sms-cellnum-desc");
const phoneMessageCheck = document.getElementById("phone-check-msg");
const phoneMessageWarn = document.getElementById("phone-warn-msg");

const certificationButton = document.getElementById("sms-sent-code");
const certificationNumberInput = document.getElementById("sms-code");
const sendMessage = document.getElementById("sms-code-focus-msg");
const failMessage = document.getElementById("sms-code-warning-txt");

const passwordInput = document.getElementById("password1");
const passwordMessageWarn = document.getElementById("password1-focus-msg");

const checks = {nameCheck: false, idCheck: false, passwordCheck: false, phoneCheck: false};
const button = document.getElementById("btn-submit");

nameInput.addEventListener("blur", (e) => {
    nameMessageWarn.style.display = "none";
    if(!e.target.value) {
        checks.nameCheck = false;
        nameMessageWarn.style.display = "block";
        return;
    }
    checks.nameCheck = true;
});

idInput.addEventListener("blur", (e) => {
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    idMessageRep.style.display = "none";
    idMessageSafe.style.display = "none";

    if(!emailReg.test(e.target.value)) {
        idMessageWarn.style.display = "block";
        checks.idCheck = false;
        return;
    }
    idMessageWarn.style.display = "none";

    memberService.checkId(e.target.value, (result) => {
        if(result) {
            idMessageRep.style.display = "block";
            checks.idCheck = false;
        }else{
            idMessageSafe.style.display = "block";
            checks.idCheck = true;
        }
    });
});

passwordInput.addEventListener("blur", (e) => {
    const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    passwordMessageWarn.style.display = "none";

    if(!passwordReg.test(e.target.value)) {
        passwordMessageWarn.style.display = "block";
        checks.passwordCheck = false;
        return;
    }
    checks.passwordCheck = true;
});

phoneInput.addEventListener("blur", (e) => {
    const phoneReg = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    phoneMessageCheck.style.display = "none"

    if(!phoneInput.value || !phoneReg.test(e.target.value)) {
        phoneMessageWarn.style.display = "block";
        checks.phoneCheck = false;
        return;
    }
    phoneMessageWarn.style.display = "none"

    memberService.checkPhone(e.target.value, (result) => {
        if(result) {
            phoneMessageCheck.style.display = "block"
            checks.phoneCheck = false;
        }else{
            phoneMessageCheck.style.display = "none"
            checks.phoneCheck = true;
            certificationButton.style.display = "block";
        }
    })
})

certificationButton.addEventListener("click", async (e) => {
    sendMessage.style.display = "block";
    globalThis.certificationNumber = await memberService.certificatePhone(phoneInput.value);
});

certificationNumberInput.addEventListener("keyup", (e) => {
    if(e.target.value.length === 6){
        sendMessage.style.display = "none";
        if(globalThis.certificationNumber == e.target.value) {
            phoneMessageSafe.style.display = "block";
            phoneInput.readOnly = true;
            e.target.parentElement.parentElement.style.display = "none";
            certificationButton.style.display = "none";
            checks.phoneCheck = true;

        }else{
            failMessage.style.display = "block"
            checks.phoneCheck = false;
        }
    }
});

button.addEventListener("click", (e) => {
    with(checks) {
        if(nameCheck && idCheck && passwordCheck && phoneCheck) {
            document.frm.submit();
        }
    }
});





