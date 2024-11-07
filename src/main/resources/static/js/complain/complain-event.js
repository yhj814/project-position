document.getElementById("help-send").addEventListener("click", (event) => {
    // 유효성 검사
    const complainType = document.getElementById("help-category");
    const complainTitle = document.getElementById("help-title");
    const complainContent = document.getElementById("help-desc");
    const agreeChk = document.getElementById("agree-chk");

    // complainType 검사
    if (!complainType.value) {
        alert("문의종류를 선택해주세요.");
        complainType.focus();
        event.preventDefault();
        return;
    }

    // complainTitle 검사
    if (!complainTitle.value.trim()) {
        alert("제목을 입력해주세요.");
        complainTitle.focus();
        event.preventDefault();
        return;
    }

    // complainContent 검사
    if (!complainContent.value.trim()) {
        alert("내용을 입력해주세요.");
        complainContent.focus();
        event.preventDefault();
        return;
    }

    // agreeChk 검사 (체크박스 확인)
    if (!agreeChk.checked) {
        alert("개인정보 수집 및 이용에 동의해 주세요.");
        event.preventDefault();
        return;
    }

    // 모든 검사를 통과하면 폼을 제출
    alert("신고가 완료되었습니다.");
});

document.getElementById("help-cancel").addEventListener("click", () =>{
    history.back();
});