const btn = document.querySelector(".question .btn");
const qaSection = document.querySelector(".question .qa");
const questionContainer = document.querySelector(".question");

btn.addEventListener("click", () => {
    questionContainer.classList.toggle("open");
    qaSection.style.display = questionContainer.classList.contains("open")
        ? "block"
        : "none";
});

document.addEventListener("DOMContentLoaded", () => {
    const applicantHistoryBtns = document.querySelectorAll(".btn-history");

    applicantHistoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("rotate");

            console.log(`After: ${btn.classList}`);
        });
    });
});

// const hideButton = document.getElementById("list-hide-btn");
// const tipContent = document.querySelector(".TipCont.TopLeft");

// tipContent.style.display = "none";

// hideButton.addEventListener("mouseover", () => {
//     tipContent.style.display = "block";
// });

// hideButton.addEventListener("mouseout", () => {
//     tipContent.style.display = "none";
// });

const applyData = [
    {
        id: 1,
        date: "2024.10.17 16:42",
        company: "마린웍스㈜",
        position: "플랫폼 서비스 개발",
        description: "IoT, 제어, 빅데이터 및 C# 기반 어플리케이션 개발자 채용",
        status: "지원완료",
        viewStatus: "미열람",
    },
    {
        id: 2,
        date: "2024.10.17 16:42",
        company: "마린웍스㈜",
        position: "플랫폼 서비스 개발",
        description: "IoT, 제어, 빅데이터 및 C# 기반 어플리케이션 개발자 채용",
        status: "지원취소",
        viewStatus: "미열람",
    },
    {
        id: 3,
        date: "2024.10.17 16:42",
        company: "마린웍스㈜",
        position: "플랫폼 서비스 개발",
        description: "IoT, 제어, 빅데이터 및 C# 기반 어플리케이션 개발자 채용",
        status: "지원대기",
        viewStatus: "열람",
    },
];

const listContainer = document.querySelector(".list-status");
const pageBox = document.querySelector(".PageBox");

if (applyData.length > 0) {
    applyData.forEach((data) => {
        const row = document.createElement("div");
        row.classList.add("row", "-apply-list", "open");
        row.id = `apply-list-${data.id}`;

        row.innerHTML = `
            <div class="InpBox">
                <span class="Chk Hide">
                    <input type="checkbox" id="chk-${data.id}" value="${data.id}" class="-recruitapply-chk checkbox-idx" />
                    <label class="Lbl" for="chk-${data.id}">선택</label>
                </span>
            </div>
            <div class="col-date">${data.date}</div>
            <div class="col-summary">
                <strong class="corp">
                    <a href="#" target="-blank">${data.company}</a>
                </strong>
                <div class="recruit">
                    <a href="#" target="-blank">
                        <span class="division">${data.position}</span>
                        <div class="TipBox">
                            <span>${data.description}</span>
                        </div>
                    </a>
                </div>
                 <div class="attached">
                                                <button
                                                    type="button"
                                                    class="data -file-down-resume"
                                                   "
                                                >
                                                    이수증 다운받기
                                                </button>
                                            </div>
                                            <div class="status">
                                                <em class="txt-status">
                                                    ${data.status}
                                                </em>
                                                <span class="txt-sub"
                                                    >${data.viewStatus}</span
                                                >
                                                <button
                                                    type="button"
                                                    class="btn-report -ai-report"
                                                  "
                                                >
                                                    경쟁력분석
                                                </button>
                                            </div>
            </div>
            <div class="col-btns">
                <div class="action"><span class="date-end"></span></div>
                <button type="button" class="BtnType SizeM -apply-cancel">지원취소</button>
                <button type="button" class="btn-history -applicant-history" data-id="${data.id}">지원내역</button>
            </div>
            <div class="col-history" id="history-${data.id}" style="display: none;">
                <ol class="timeline">
                    <li class="now">
                        <span class="date">${data.date}</span>
                        <span class="desc">
                            <strong>지원 완료</strong>
                            <span>지원서류<button type="button" class="txt" onclick="viewApplyResume(${data.id}, 'print');">이력서</button></span>
                            <span>지원 완료<button type="button" class="txt" onclick="cancelLayer('.cancel-layerWrap', 'on', '${data.company}', ${data.id});">지원 취소</button></span>
                        </span>
                    </li>
                </ol>
            </div>
        `;

        listContainer.appendChild(row);
    });

    document.querySelectorAll(".btn-history").forEach((button) => {
        button.addEventListener("click", (event) => {
            const id = event.target.getAttribute("data-id");
            const history = document.getElementById(`history-${id}`);
            history.style.display =
                history.style.display === "block" ? "none" : "block";
        });
    });
} else {
    listContainer.innerHTML = `
         <form name="list-form-no-row" id="list-form-no-row">
                                <div class="list-status">
                                    <div class="no-row">
                                        <p class="txt">
                                            <b>입사지원 내역이 없어요</b>
                                            userName님에게 맞는 공고를
                                            소개해줄게요!
                                        </p>
                                        <a
                                            href=""
                                            class="link-go"
                                            >나에게 맞는 공고 보러가기</a
                                        >
                                    </div>
                                </div>
                            </form>
    `;
    pageBox.style.display = "none";
}

const selectAll = document.getElementById("selectAll");
const individualCheckboxes = document.querySelectorAll(
    'input[type="checkbox"].checkbox-idx'
);

// 전체선택 체크박스 클릭 이벤트
selectAll.addEventListener("change", () => {
    const isChecked = selectAll.checked;
    individualCheckboxes.forEach((checkbox) => {
        checkbox.checked = isChecked;
    });
});

// 개별 체크박스 상태 변경 이벤트
individualCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const allChecked = Array.from(individualCheckboxes).every(
            (cb) => cb.checked
        );
        selectAll.checked = allChecked;
    });
});
// 로직입니다!
// 모든 개별 체크박스에 대해 반복하면서 이벤트 리스너를 등록
// 각 개별 체크박스에 'change' 이벤트 리스너를 등록
// 모든 개별 체크박스가 선택되었는지 확인
// 각 체크박스가 체크된 상태인지 확인
// 전체 선택 체크박스의 상태를 업데이트
// 모든 체크박스가 체크된 경우 전체 선택 체크박스도 체크됨
// 하나라도 체크 해제된 경우 전체 선택 체크박스도 해제됨

// 클래스가 BtnType인 모든 버튼을 선택합니다.
const btnTypes = document.querySelectorAll(".BtnType");
// BtnType 버튼들과 list-review 요소들을 모두 선택합니다.
const reviews = document.querySelectorAll(".row.-apply-list.open");

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
