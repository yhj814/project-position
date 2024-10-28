const boxJobs = document.querySelector('.box-jobs');
const listOverview = document.querySelector(".list.overview"); // <ul> 요소 선택

const renderCategoryButtons = (categories) => {
    boxJobs.innerHTML = ''; // 기존 내용 삭제
    let text = ``;

    categories.forEach((category) => {
       text += `<button type="button" class="btn-job" data-category="${category.id}">${category.jobCategoryAName}</button>`;
    });
    boxJobs.innerHTML += text;

    // 버튼 클릭 이벤트 설정
    setButtonClickEvents();
};

// 버튼 클릭 이벤트 설정 함수
const setButtonClickEvents = () => {
    const buttons = boxJobs.querySelectorAll(".btn-job");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const categoryId = button.getAttribute("data-category");
            highlightJobItem(categoryId); // 해당 카테고리의 <li> 항목에 'on' 클래스 추가
            jobcategoryService.getCategoryB(categoryId, renderCategories);
        });
    });

    // 새로운 버튼이 추가된 후 first-depth 버튼의 이벤트 리스너 설정
    const firstDepthButtons = listOverview.querySelectorAll(".first-depth");
    firstDepthButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const categoryId = button.getAttribute("data-category");
            highlightJobItem(categoryId);
            jobcategoryService.getCategoryB(categoryId, renderCategories);
        });
    });
};
// <ul> 목록에 항목 추가
const addJobListItems = (categories) => {
    listOverview.innerHTML =''; // 기존 내용 삭제
    let text = ``;

    categories.forEach((category) => {
        text += `<li class="item-job depth1-btn-wrapper" data-category="${category.id}">
                    <button type="button" data-category="${category.id}" class="first-depth">
                        <span class="txt">${category.jobCategoryAName}</span>
                    </button>
                </li>`
    })

    listOverview.innerHTML += text;
    setButtonClickEvents();
};

const categoryContainer = document.getElementById("categoryB");

// Category B와 C를 렌더링하는 함수
const renderCategories = (categoriesBWithC) => {
    let content = ""; // HTML 문자열 초기화

    // categoriesBWithC 객체의 각 categoryB에 대해 반복
    Object.keys(categoriesBWithC).forEach((categoryB) => {
        // 카테고리 B의 이름을 사용하여 버튼 생성
        content += `
            <dl class="row-item">
                <dt>
                    <button type="button" class="btn-expand">
                        <span class="txt">${categoryB}</span>
                    </button>
                </dt>
                <dd class="area-list">`;

        // 카테고리 C 버튼 추가
        const categoryCArray = categoriesBWithC[categoryB];
        categoryCArray.forEach((categoryC) => {
            content += `
                   <button type="button" class="btn-three-depth">${categoryC}</button>`;
            });

        content += `
                </dd>
            </dl>`;
    });

    categoryContainer.innerHTML = content; // 생성된 HTML 문자열을 설정
};


// 선택한 카테고리에 해당하는 항목에 'on' 클래스 추가
const highlightJobItem = (categoryId) => {
    // 모든 <li> 요소에서 'on' 클래스 제거
    listOverview.querySelectorAll(".item-job").forEach(item => item.classList.remove("on"));

    // 해당하는 <li> 요소에만 'on' 클래스 추가
    const targetItem = listOverview.querySelector(`.item-job[data-category="${categoryId}"]`);
    if (targetItem) {
        targetItem.classList.add("on");
    }
};