const personTab = document.querySelector(".btn-tab.t-per");
const companyTab = document.querySelector(".btn-tab.t-com");
const personLogin = document.querySelector(".area-integrated-login.person");
const companyLogin = document.querySelector(".area-integrated-login.company");
const loginRater = document.querySelector(".link-rater");
const autologinCheckBox = document.querySelector(
    '[name="autologin-check-box"]'
);

// 아이디, 비밀번호 입력 필드 선택
const idInput = document.querySelector("#id");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".btn-login"); // 로그인 버튼

const socialLogin = document.querySelector("div.social-login-tit");
const socialLoginWrap = document.getElementById("wrap-social-login");

// 페이지 로드 시 기본 상태 설정 (기업회원 숨김)
window.addEventListener("DOMContentLoaded", () => {
    companyLogin.style.display = "none"; // 기업회원 탭 처음에 숨김
    personTab.classList.add("active"); // 개인회원 탭 기본 활성화
    personTab.setAttribute("aria-selected", "true");
    companyTab.setAttribute("aria-selected", "false");
});

// 탭 토글 함수
const memberType = document.getElementById("member-type");

personTab.addEventListener("click", () => toggleTabs(true));
companyTab.addEventListener("click", () => toggleTabs(false));

const toggleTabs = (isPerson) => {
    if(isPerson){
        memberType.value = "Personal";
        idInput.name = "memberEmail";
        passwordInput.name = "memberPassword";
        socialLogin.style.display = "block";
        socialLoginWrap.style.display = "block";
    }else{
        idInput.name = "corporationEmail";
        passwordInput.name = "corporationPassword";
        memberType.value = "Corporation";
        socialLogin.style.display = "none";
        socialLoginWrap.style.display = "none";
    }

    personTab.classList.toggle("active", isPerson);
    companyTab.classList.toggle("active", !isPerson);

    personTab.setAttribute("aria-selected", isPerson ? "true" : "false");
    companyTab.setAttribute("aria-selected", isPerson ? "false" : "true");

    personTab.setAttribute("tabindex", isPerson ? "0" : "-1");
    companyTab.setAttribute("tabindex", isPerson ? "-1" : "0");

    personLogin.style.display = isPerson ? "block" : "none";
    companyLogin.style.display = isPerson ? "none" : "block";

    loginRater.style.display = isPerson ? "none" : "block";

    autologinCheckBox.style.display = isPerson ? "block" : "none";
};

// 로그인 버튼 클릭 시 아이디, 비밀번호 입력 여부 확인
loginButton.addEventListener("click", (event) => {
    // event.preventDefault(); // 실제 서버 요청 방지 (테스트용)

    const userId = idInput.value.trim();
    const userPassword = passwordInput.value.trim();

    if (!userId) {
        alert("아이디를 입력해 주세요.");
        idInput.focus(); // 아이디 입력 필드에 포커스
        return;
    }

    if (!userPassword) {
        alert("비밀번호를 입력해 주세요.");
        passwordInput.focus(); // 비밀번호 입력 필드에 포커스
        return;
    }
});


