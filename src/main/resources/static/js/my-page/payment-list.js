const pageBtn = document.querySelectorAll(".BtnType.SizeS");

pageBtn.forEach((button) => {
    button.addEventListener("click", () => {
        // 이전/다음 버튼은 처리하지 않음
        if (
            button.classList.contains("BtnPrev") ||
            button.classList.contains("BtnNext")
        ) {
            return;
        }

        // 모든 버튼에서 'select' 클래스 제거
        pageBtn.forEach((btn) => btn.classList.remove("select"));

        // 클릭된 버튼에 'select' 클래스 추가
        button.classList.add("select");
    });
});
