const menus = document.querySelectorAll(".menu_item");
console.log(menus);

const bookMarks = document.querySelectorAll(".newcomer_book_mark");
console.log(bookMarks);

const nextButton = document.querySelector(".bx-next");
const prevButton = document.querySelector(".bx-prev");
const reviewList = document.getElementById("companyReviewSlider");
const reviewItems = document.querySelectorAll(".review_item");

// 사이드바 메뉴
menus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
        menus.forEach((menu) => {
            menu.classList.remove("selected");
        });
        menu.classList.add("selected");
    });
});
// // 즐찾 버튼
// bookMarks.forEach((bookMark) => {
//     bookMark.addEventListener("click", (e) => {
//         e.target.classList.toggle("on");
//     });
// });

// // 슬라이더
// let currentIndex = 0;
// const updateSlider = () => {
//     const totalItems = reviewItems.length;
//     const itemWidth = reviewItems[0].offsetWidth;
//     const offset = -currentIndex * (itemWidth + 16); // 16px는 margin-right 값

//     // 슬라이더 위치 조정
//     reviewList.style.transform = `translate3d(${offset}px, 0, 0)`;

//     reviewItems.forEach((item, index) => {
//         item.setAttribute(
//             "aria-hidden",
//             index < currentIndex || index > currentIndex + 1 ? "true" : "false"
//         );
//     });

//     // 버튼 상태 업데이트
//     prevButton.classList.toggle("disabled", currentIndex === 0);
//     nextButton.classList.toggle("disabled", currentIndex >= totalItems - 2);
// };

// nextButton.addEventListener("click", () => {
//     if (currentIndex < reviewItems.length - 2) {
//         currentIndex += 1;
//         updateSlider();
//     }
// });

// prevButton.addEventListener("click", () => {
//     if (currentIndex > 0) {
//         currentIndex -= 1;
//         updateSlider();
//     }
// });

// // 초기 상태 업데이트
// updateSlider();

// 닫기 버튼 선택
const closeButton = document.getElementById("pop_login_layer_close");
// 로그인 팝업 레이어 선택
const loginLayer = document.getElementById("wrap_quick_apply_layer");

// 닫기 버튼 클릭 이벤트 리스너
closeButton.addEventListener("click", function () {
    document.body.style.overflow = "auto";
    // 로그인 팝업을 숨김
    loginLayer.style.display = "none";
});
