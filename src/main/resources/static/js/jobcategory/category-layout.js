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
const selectedJobContainer = document.querySelector(".box-result .row .list dd"); // 선택한 직무를 표시할 영역

// Category B와 C를 렌더링하는 함수
const renderCategories = (categoriesBWithC) => {
    let content = ""; // HTML 문자열 초기화

    Object.keys(categoriesBWithC).forEach((categoryA) => {
        const categoriesB = categoriesBWithC[categoryA];
        Object.keys(categoriesB).forEach((categoryB) => {
            // 중카(B) 이름을 사용하여 버튼 생성
            content += `
                <dl class="row-item">
                    <dt>
                        <button type="button" class="btn-expand">
                            <span class="txt">${categoryB}</span>
                        </button>
                    </dt>
                    <dd class="area-list">`;

            // 카테고리 C 버튼 추가
            const categoryCArray = categoriesB[categoryB];
            categoryCArray.forEach((categoryC) => {
                content += `
                       <button type="button" class="btn-three-depth" data-categoryA="${categoryA}" data-categoryB="${categoryB}" data-categoryC="${categoryC}">${categoryC}</button>`;
            });

            content += `
                    </dd>
                </dl>`;
        });
    });

    categoryContainer.innerHTML = content; // 생성된 HTML 문자열을 설정

    // 각 btn-three-depth 버튼에 클릭 이벤트 추가
    const depthButtons = document.querySelectorAll(".btn-three-depth");
    depthButtons.forEach((button) => {
        button.addEventListener("click", handleDepthButtonClick);
    });
};

// btn-three-depth 클릭 시 호출되는 함수
const handleDepthButtonClick = (event) => {
    const button = event.target;

    // 현재 버튼에 on 클래스 토글 (추가 또는 제거)
    button.classList.toggle("on");

    const categoryA = button.getAttribute("data-categoryA");
    const categoryB = button.getAttribute("data-categoryB");
    const categoryC = button.getAttribute("data-categoryC");

    // 선택된 직무를 표시할 span 태그 내용
    const spanContent = `
        <span class="job-selected">${categoryA}
            <button type="button" class="btnDelete deleteToDepth">
                <span class="blind">삭제</span>
            </button> &nbsp;&gt;&nbsp;&nbsp;${categoryC}
            <button type="button" class="btn-delete deleteToKeyword">
                <span class="blind">삭제</span>
            </button>
        </span>`;

    // 이미 선택된 직무인지 확인
    const existingSpans = selectedJobContainer.querySelectorAll(".job-selected");

    // 버튼이 선택된 경우
    if (button.classList.contains("on")) {
        // 새로운 span을 추가
        const newSpan = document.createElement("span");
        newSpan.className = "job-selected";
        newSpan.innerHTML = `${categoryA}
            <button type="button" class="btnDelete deleteToDepth">
                <span class="blind">삭제</span>
            </button> &nbsp;&gt;&nbsp;&nbsp;${categoryC}
            <button type="button" class="btn-delete deleteToKeyword">
                <span class="blind">삭제</span>
            </button>`;

        selectedJobContainer.appendChild(newSpan);

        // 삭제 버튼에 클릭 이벤트 추가
        const deleteButton = newSpan.querySelector(".btn-delete");
        deleteButton.addEventListener("click", () => handleDeleteButtonClick(newSpan, button));
    } else {
        // 버튼이 선택 해제된 경우, 해당 직무 삭제
        const selectedJobSpan = Array.from(existingSpans).find(span =>
            span.textContent.includes(categoryC) && span.textContent.includes(categoryA)
        );
        if (selectedJobSpan) {
            selectedJobContainer.removeChild(selectedJobSpan);
        }
    }

    // 선택된 직무가 없을 경우 메시지 추가/제거
    updateNoSelectionMessage();
};

// btn-delete 클릭 시 호출되는 함수
const handleDeleteButtonClick = (selectedJobSpan, relatedButton) => {
    // 삭제할 span 태그 찾기
    if (selectedJobSpan) {
        selectedJobContainer.removeChild(selectedJobSpan);
    }

    // 관련된 btn-three-depth 버튼에서 on 클래스 제거
    relatedButton.classList.remove("on");

    // 선택된 직무가 없을 경우 메시지 추가/제거
    updateNoSelectionMessage();
};

// 선택된 직무가 없을 경우 메시지를 업데이트하는 함수
const updateNoSelectionMessage = () => {
    const existingSpans = selectedJobContainer.querySelectorAll(".job-selected");
    const noSelectionSpan = document.querySelector(".no-selection");

    if (existingSpans.length === 0) {
        // 선택된 직무가 없을 경우 메시지 추가
        if (!noSelectionSpan) {
            const message = document.createElement("span");
            message.className = "no-selection";
            message.textContent = "선택된 직무가 없습니다";
            selectedJobContainer.appendChild(message);
        }
    } else {
        // 선택된 직무가 있을 경우 메시지 제거
        if (noSelectionSpan) {
            selectedJobContainer.removeChild(noSelectionSpan);
        }
    }
};

// btn-job-confirm 클릭 시 호출되는 함수
const handleJobConfirmClick = () => {
    const hopeJobsList = document.querySelector(".list-task.list-hope-jobs.size-type5.selected-preview-list");
    hopeJobsList.innerHTML ='';
    const selectedJobs = selectedJobContainer.querySelectorAll(".job-selected");
    selectedJobs.forEach(job => {
        // 대카와 소카를 파싱
        const categoryA = job.childNodes[0].nodeValue.trim(); // 대카값
        const categoryC = job.childNodes[2].nodeValue.trim(); // 소카값

        // 새로운 li 요소 생성
        const liElement = document.createElement("li");
        liElement.innerHTML = `
            <span class="hope_jobs" style="color:#566feb;">${categoryA}
                <button type="button" class="btnDelete deleteToDepth">
                    <span class="blind">삭제</span>
                </button>
            </span>
            <span class="hope_jobs" th:field="*{noticeCategoryName}">${categoryC}
                <button type="button" class="btn-delete deleteToKeyword">
                    <span class="blind">삭제</span>
                </button>
            </span>
        `; // 대카와 소카값으로 구조 설정

        // 삭제 버튼에 클릭 이벤트 추가
        const deleteButton = liElement.querySelector(".btn-delete");
        if (deleteButton) {
            deleteButton.addEventListener("click", () => {
                liElement.remove(); // liElement 삭제
                updateNoSelectionMessage(); // 메시지 업데이트
            });
        }

        hopeJobsList.appendChild(liElement); // ul에 li 추가
    });
};


// btn-job-confirm 버튼에 클릭 이벤트 추가
const jobConfirmButton = document.querySelector(".btn-job-confirm");
if (jobConfirmButton) {
    jobConfirmButton.addEventListener("click", handleJobConfirmClick);
}




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