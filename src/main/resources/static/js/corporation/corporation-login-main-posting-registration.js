document.addEventListener("DOMContentLoaded",  () => {
    const tabBox = document.querySelector(".TabBox");
    // 이 부분 위에 비동기 하셔야합니다. 지금 마감 누르면 이 js 작동 되는데,
    // 진행중에서 마감으로 넘어가는 그 사이에 아래 if(tabBox) 가 들어가야합니다
    // 꼭 참고해주세요
    if (tabBox) {
        tabBox.addEventListener("click",  (event) =>{
            const clickedButton = event.target.closest(".BtnType");

            if (clickedButton) {
                console.log("Clicked button:", clickedButton);
                console.log("Parent li:", clickedButton.parentElement);

                // 모든 li에서 Select 클래스 제거
                document.querySelectorAll(".TabBox li").forEach((li) => {
                    li.classList.remove("Select");
                });

                // 클릭된 버튼의 부모 li에 Select 클래스 추가
                clickedButton.parentElement.classList.add("Select");

                // 로딩 화면 보이기
                // const loadingDiv = document.getElementById("ingRecruitLoading");
                // if (loadingDiv) {
                //     loadingDiv.style.display = "block";
                //
                //     // 공고 데이터 불러오는 시간 시뮬레이션 ()
                //     setTimeout(() => {
                //         loadingDiv.style.display = "none";
                //     }, 300);
                // }
            }
        });
    }
});
// 탭 클릭 이벤트 처리 및 공고 목록 로드
// const setupTabSwitch = () => {
//     const tabBox = document.querySelector(".TabBox");
//
//     if (tabBox) {
//         tabBox.addEventListener("click", function (event) {
//             const clickedButton = event.target.closest(".BtnType");
//
//             if (clickedButton) {
//                 console.log("Clicked button:", clickedButton);
//
//                 // 모든 li에서 Select 클래스 제거
//                 document.querySelectorAll(".TabBox li").forEach((li) => {
//                     li.classList.remove("Select");
//                 });
//
//                 // 클릭된 버튼의 부모 li에 Select 클래스 추가
//                 clickedButton.parentElement.classList.add("Select");
//
//                 // 상태 변경 및 공고 목록 로드
//                 const newStatus = clickedButton.dataset.status; // 버튼에 설정된 상태 값 가져오기
//                 statusInput.value = newStatus;
//
//                 toggleLoading(true); // 로딩 화면 보이기
//                 loadNotices(); // 새 상태에 따라 공고 목록 로드
//             }
//         });
//     }
// };