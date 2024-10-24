const ulElement = document.querySelector(".wrap-list-interview");

for (let i = 0; i < 9; i++) {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
        <a class="inlist-box">
            <p class="sub-title">
                <span class="in-subtit">브랜딩, 브랜드마케팅, 마케팅</span>
                <em class="flag-applying">채용중</em>
            </p>
            <p class="title">
                <em>브랜딩과 마케팅커뮤니케이션의 전반적인 업무를 총괄해요</em>
            </p>
            <div class="box-info">
                <div class="txt-detail">
                    <p class="company-name">에스디생명공학</p>
                    <p class="company-part">
                        <em class="inpart">마케팅팀</em>
                        <em class="inname">김리원</em>
                    </p>
                    <p class="day-line">
                        <span class="day">24.09.20</span>
                        <span class="view-count">1011</span>
                    </p>
                </div>
                <div class="img-view">
                    <span class="img">
                        <img src="https://pds.saramin.co.kr/career-information/asset_thumbnail/202409/20/sk3ns4_ffxp-2so1pr_asset.png" 
                        alt="직무인터뷰 관계자 사진" />
                    </span>
                </div>
            </div>
        </a>
    `;

    ulElement.appendChild(liElement);
}

const categoryList = document.querySelector(".list-category");

categoryList.addEventListener("click", (event) => {
    const clickedItem = event.target.closest("li");

    if (clickedItem) {
        // 모든 li에서 'on' 클래스 제거
        categoryList
            .querySelectorAll("li")
            .forEach((el) => el.classList.remove("on"));

        // 클릭된 항목에만 'on' 클래스 추가
        clickedItem.classList.add("on");
    }
});

// 일단 count도 넣어놓았습니다!
const categories = [
    { name: "경영관리", count: 155 },
    { name: "경영분석", count: 120 },
    { name: "경영컨설팅", count: 98 },
    { name: "경영혁신(PI)", count: 42 },
    { name: "금융컨설팅", count: 33 },
    { name: "데이터분석", count: 200 },
    { name: "레벨디자인", count: 50 },
    { name: "리서치", count: 67 },
    { name: "리스크 관리", count: 29 },
    { name: "사업개발", count: 88 },
    { name: "사업관리", count: 76 },
    { name: "사업제휴", count: 35 },
    { name: "스토리보드", count: 15 },
    { name: "시장조사", count: 98 },
    { name: "신사업기획", count: 55 },
    { name: "신사업발굴", count: 45 },
    { name: "실적관리", count: 66 },
    { name: "엑셀러레이팅", count: 22 },
    { name: "예산관리", count: 19 },
    { name: "인큐베이팅", count: 31 },
    { name: "자료조사", count: 14 },
    { name: "조직관리", count: 52 },
    { name: "지속가능경영", count: 12 },
    { name: "창업컨설팅", count: 40 },
    { name: "타당성검토", count: 18 },
    { name: "투자전략", count: 47 },
    { name: "트렌드분석", count: 90 },
    { name: "프로토타이핑", count: 23 },
    { name: "해외법인관리", count: 9 },
    { name: "BPR", count: 8 },
    { name: "BSC", count: 5 },
    { name: "CSR", count: 13 },
    { name: "ESG", count: 70 },
    { name: "ISMP", count: 11 },
    { name: "ISP", count: 6 },
    { name: "KPI관리", count: 49 },
    { name: "M&A", count: 22 },
    { name: "MBO", count: 17 },
    { name: "OKR", count: 25 },
    { name: "RFP(제안요청서)", count: 8 },
    { name: "UI/UX", count: 100 },
];

const ul = document.querySelector(".list-category");

categories.forEach((category) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = `${category.name} (${category.count})`;
    a.setAttribute(
        "onmousedown",
        "try{n-trackEvent('public', 'job-interview', 'category', '');}catch(e){}"
    );

    li.appendChild(a);
    ul.appendChild(li);
});
