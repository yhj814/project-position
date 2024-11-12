document.getElementById("interviewDateYear").addEventListener("change", (e) => {
    const year = this.value;
    const monthSelect = document.getElementById("interviewDateMonth");
    let months = [];

    // 연도에 따라 월을 필터링
    if (year === "2021") {
        // 2021년은 11월과 12월만 가능
        months = ["11", "12"];
    } else if (year === "2024") {
        // 2024년은 1월부터 10월까지만 가능
        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
    } else {
        // 2022년, 2023년은 1월부터 12월까지 가능
        months = [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
        ];
    }

    // 월 선택 초기화 및 옵션 동적 생성
    monthSelect.innerHTML = `<option value="">월 선택</option>`; // 기본 옵션 추가
    months.forEach((month) => {
        const option = document.createElement("option");
        option.value = month;
        option.text = `${month}월`;
        monthSelect.appendChild(option);
    });
});

// 모달창 열기 닫기 이벤트
const openMyApplyCompanyModal = document.querySelector(".my-apply-company");
const openMyApplyCompanyModalBackGround = document.querySelector(
    ".my-apply-company-modal-background"
);
const closeBtn = document.querySelector(".btn-close");
const cancelBtn = document.querySelector(".btn-cancel");
const interviewSearch = document.querySelector(
    ".interview-write-btn-company-search"
);

interviewSearch.addEventListener("click", () => {
    openMyApplyCompanyModal.style.display = "block";
    openMyApplyCompanyModalBackGround.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    openMyApplyCompanyModal.style.display = "none";
    openMyApplyCompanyModalBackGround.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
    openMyApplyCompanyModal.style.display = "none";
    openMyApplyCompanyModalBackGround.style.display = "none";
});

// 면접질문 추가 및 삭제
const questionAddBtn = document.querySelector(".interview-question-add-btn");
const questionList = document.querySelector(".interview-write-list-question");

questionAddBtn.addEventListener("click", () => {
    // 새로운 li 요소 생성
    const newListItem = document.createElement("li");

    // 새로운 input 요소 생성
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "interview-write-inpTypo";
    newInput.placeholder = "ex) 질문";
    newInput.name = "interview-question";

    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "- 삭제";
    deleteBtn.type = "button";
    deleteBtn.className = "interview-question-delete-btn";

    // 삭제 버튼 클릭 시 해당 li 요소 삭제
    deleteBtn.addEventListener("click", () => {
        questionList.removeChild(newListItem);
    });

    // 생성한 input과 삭제 버튼을 새로운 li 요소에 추가
    newListItem.appendChild(newInput);
    newListItem.appendChild(deleteBtn);

    // 추가 버튼이 있는 li 위에 새로운 li 요소 추가
    questionList.insertBefore(newListItem, questionAddBtn.parentElement);
});
