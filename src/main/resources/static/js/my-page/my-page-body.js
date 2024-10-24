// 고정 슬라이드 이동 거리
const slideWidth = 316;

let activeSlider = document.querySelector(".wrap-slider.active .slider");
let activeSlides = activeSlider.querySelectorAll("li");

let count = 1; // 현재 슬라이드 인덱스
let totalSlides = activeSlides.length - 3; // 총 슬라이드 개수 - 보여지는 슬라이드 수

// 슬라이더 위치 업데이트 함수
const updateSlidePosition = () => {
    const translateX = -(slideWidth * (count - 1));

    activeSlider.style.transition = "transform 0.5s";
    activeSlider.style.transform = `translateX(${translateX}px)`;

    const prevButton = document.querySelector(".btn-prev");
    const nextButton = document.querySelector(".btn-next");

    // 버튼 상태 업데이트
    const isPrevDisabled = count === 1;
    const isNextDisabled = count === totalSlides;

    // 두 버튼이 모두 비활성화인 경우
    if (isPrevDisabled && isNextDisabled) {
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }
    // 하나라도 활성화된 경우
    else {
        prevButton.style.display = "block";
        nextButton.style.display = "block";

        // 개별 버튼의 disabled 상태 업데이트
        prevButton.disabled = isPrevDisabled;
        nextButton.disabled = isNextDisabled;
    }
};

// 버튼 클릭 이벤트
document.querySelector(".btn-prev").addEventListener("click", () => {
    if (count > 1) {
        count--;
        updateSlidePosition();
    }
});

document.querySelector(".btn-next").addEventListener("click", () => {
    if (count < totalSlides) {
        count++;
        updateSlidePosition();
    }
});

// 탭 클릭 이벤트
const tabs = document.querySelectorAll(".tabWrap.TabBox li");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // 화살표 함수 사용
        // 모든 탭에서 'Select' 클래스 제거
        tabs.forEach((t) => t.classList.remove("Select"));
        tab.classList.add("Select"); // 클릭한 탭에 'Select' 클래스 추가

        // 모든 슬라이더 숨기기
        document.querySelectorAll(".wrap-slider").forEach((slider) => {
            slider.classList.remove("active");
        });

        // 선택한 슬라이더 보이기
        const targetId = tab.getAttribute("data-target");
        const targetSlider = document.getElementById(targetId);
        targetSlider.classList.add("active");

        // 활성화된 슬라이더와 슬라이드 리스트 업데이트
        activeSlider = targetSlider.querySelector(".slider");
        activeSlides = activeSlider.querySelectorAll("li");
        totalSlides = activeSlides.length - 3; // 슬라이드 개수 재설정
        count = 1; // 인덱스 초기화

        // 슬라이드 위치 초기화
        updateSlidePosition();
    });
});

// 초기 슬라이드 위치 설정
updateSlidePosition();
