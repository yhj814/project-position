const applyPaging = document.querySelector(".PageBox");
const listBody = document.querySelector('.list-recruiting');
const ongoingBtn = document.getElementById("ongoing-btn");
const closedBtn = document.getElementById("closed-btn");
const statusInput = document.getElementById("apply-status");
const loadingScreen = document.getElementById("ingRecruitLoading"); // 로딩 화면 요소
const sortingSelect = document.querySelector(".InpBox.sorting-select");

const showApplyList = ({applies, pagination,ongoingCount, closedCount}) =>{
    listBody.innerHTML='';
    let pagingText = "";

    let text='';

    applies.forEach(apply => {

        // if (statusInput.value === 'ongoing') {
            text += `
             <div class="list-status">
                <div class="row -apply-list" id="apply-list-${apply.id}">
                    <div class="col-summary">
                        <strong class="corp">
                            <a href="/zf-user/company-info/view?csn=${apply.corporationId}" target="-blank">
                                ${apply.memberName}
                            </a>
                        </strong>
                        <div class="recruit">
                            <a href="/zf-user/jobs/relay/view?rec-idx=${apply.id}&view-type=apply-status&t-ref=apply-status-list&t-ref-content=generic" target="-blank">
                                <span class="division">${apply.noticeTitle}</span>
                                <div class="TipBox">
                                    <span>${apply.noticeJobCategoryName}</span>
                                </div>
                            </a>
                        </div>
                        <div class="attached">
                            <button type="button" class="data -file-down-resume">이력서</button>
                        </div>
                        <div class="status">
                            <em class="txt-status">${apply.applyStatus}</em>
                            <span class="txt-sub">${formatDate(apply.noticeEndDate)}</span>
                            <button type="button" class="btn-report -ai-report">
                                <svg></svg> 경쟁력분석
                            </button>
                        </div>
                    </div>
                    <div class="col-btns">
                        <div class="action">
                            <span class="date-end"></span>
                        </div>
                        <button type="button" class="BtnType SizeM -apply-cancel" data-id="${apply.id}">지원합격</button>
                        <button type="button" class="btn-history -applicant-history">지원내역</button>
                    </div>
    
                    <div class="col-history" style="display: none">
                        <ol class="timeline">
                            <li class="now">
                                <span class="date">${formatDate(apply.createdDate)}</span>
                                <span class="desc">
                                    <strong>${apply.applyStatus}</strong>
                                    <span>지원서류<button type="button" class="txt">이력서</button></span>
                                    <span>지원 완료<button type="button" class="txt">지원 취소</button></span>
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            `;
        // } else if (statusInput.value === 'closed') {
        //     text=``
        // }
    });
    listBody.innerHTML = text;

    // 이전 버튼
    if (pagination.prev) {
        pagingText += `
        <button class="BtnType SizeS BtnPrev" onclick="goToPage(${pagination.startPage - 1})">
            이전
        </button>
    `;
    }

    // 페이지 번호
    for (let i = pagination.startPage; i <= pagination.endPage; i++) {
        if (pagination.page === i) {
            pagingText += `
            <span class="BtnType SizeS active">${i}</span>
            `;
        } else {
            pagingText += `
            <span class="BtnType SizeS" onclick="goToPage(${i})">${i}</span>
            `;
        }
    }

    // 다음 버튼
    if (pagination.next) {
        pagingText += `
        <button class="BtnType SizeS BtnNext" onclick="goToPage(${pagination.endPage + 1})">
            다음
        </button>
        `;
    }

    // 페이지네이션 HTML 삽입
    applyPaging.innerHTML = pagingText;

    const updateButtons = document.querySelectorAll('.-apply-cancel');
    updateButtons.forEach(button =>{
        button.addEventListener('click', async () => {
            const applyId = button.getAttribute('data-id'); // 지원 ID 가져오기
            const confirmed = confirm("정말로 합격처리 하시겠습니까?"); // 삭제 확인
            const newStatus = '면접 예정';
            if(confirmed){
                await applyService.update({id: applyId, applyStatus:newStatus});
                loadApplies(); // 업데이트된 상태를 표시하기 위해 리스트를 새로 로드
            }
        });
    });
    hideLoading(); // 로딩 화면 숨기기

};

// 로딩 화면 표시 함수
const showLoading = () => {
    loadingScreen.style.display = 'block';
};

// 로딩 화면 숨김 함수
const hideLoading = () => {
    loadingScreen.style.display = 'none';
};

/// 공고 목록 로드 함수
const loadApplies = (page = 1, order = 'recent', status = statusInput.value) => {
    console.log(statusInput.value);
    showLoading(); // 로딩 화면 표시
    applyService.getApplyList(page, order, status, (data) => {
        showApplyList(data, status);
    });
};

// 버튼 클릭 시 상태 변경 및 공고 목록 로드
ongoingBtn.addEventListener("click", () => {
    statusInput.value = 'ongoing'; // 상태를 진행 중으로 설정
    loadApplies();
});

closedBtn.addEventListener("click", () => {
    statusInput.value = 'closed'; // 상태를 마감으로 설정
    loadApplies();
});

// 페이지 전환 함수
function goToPage(page) {
    // const order = sortingSelect.value; // 드롭다운에서 선택된 정렬 기준을 가져옵니다.
    const status = statusInput.value; // 현재 상태 값을 가져옵니다.
    loadApplies(page, status); // 상태를 유지하면서 공고 목록 로드
}

// 드롭다운 변경 시 공고 목록 로드
// sortingSelect.addEventListener("change", () => {
//     loadApplies(1, sortingSelect.value); // 기본 정렬 기준으로 목록 로드
// });

// 페이지 로드 시 공고 목록 가져오기
document.addEventListener('DOMContentLoaded', () => {
    loadApplies(); // 기본 정렬 기준과 상태로 목록 로드
});

// 날짜 형식을 'YYYY-MM-DD'로 변환하는 함수
const formatDate = (dateString) => {
    if (!dateString) return '날짜 정보 없음'; // 날짜 정보가 없을 때의 기본값 설정
    const date = new Date(dateString);
    return isNaN(date) ? '유효하지 않은 날짜' : date.toISOString().split('T')[0]; // 유효한 날짜가 아니면 기본 메시지 반환
};