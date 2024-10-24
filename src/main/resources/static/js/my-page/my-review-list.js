// 모든 버튼과 내용 가져오기
const btnViews = document.querySelectorAll(".btn-view");
const viewConts = document.querySelectorAll(".view-cont");

// 각 버튼에 클릭 이벤트 추가
btnViews.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const isOpen = btn.classList.contains("open");

        // 모든 내용 숨기기 & 버튼 초기화
        viewConts.forEach((cont) => (cont.style.display = "none"));
        btnViews.forEach((button) => button.classList.remove("open"));

        // 클릭한 버튼과 해당 내용만 열기/닫기
        if (!isOpen) {
            viewConts[index].style.display = "block";
            btn.classList.add("open");
        }
    });
});

// 클래스가 BtnType인 모든 버튼을 선택합니다.
const btnTypes = document.querySelectorAll(".BtnType");
// BtnType 버튼들과 list-review 요소들을 모두 선택합니다.
const reviews = document.querySelectorAll(".list-review");

// 초기 설정: 첫 번째 리뷰를 보이게 하고, 첫 번째 버튼의 부모 li에 'Select' 클래스 추가
reviews.forEach((review, index) => {
    review.style.display = index === 0 ? "block" : "none"; // 첫 번째 리뷰만 보이게 설정
});

// 각 버튼에 클릭 이벤트를 추가합니다.
btnTypes.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // 모든 li 요소에서 'Select' 클래스를 제거합니다.
        document
            .querySelectorAll("li")
            .forEach((li) => li.classList.remove("Select"));

        // 클릭된 버튼의 부모 li 요소에 'Select' 클래스를 추가합니다.
        btn.closest("li").classList.add("Select");

        // 모든 리뷰를 숨기기
        reviews.forEach((review) => {
            review.style.display = "none";
        });

        // 클릭된 버튼과 같은 인덱스의 리뷰만 표시
        reviews[index].style.display = "block";
    });
});

// 후기 유의사항 QA
const btn = document.querySelector(".question .btn");
const qaSection = document.querySelector(".question .qa");
const questionContainer = document.querySelector(".question");

btn.addEventListener("click", () => {
    questionContainer.classList.toggle("open");
    qaSection.style.display = questionContainer.classList.contains("open")
        ? "block"
        : "none";
});
