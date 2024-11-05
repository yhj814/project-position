const applyPaging = document.querySelector(".PageBox");
const listBody = document.querySelector('.list-recruiting');
const ongoingBtn = document.getElementById("ongoing-btn");
const closedBtn = document.getElementById("closed-btn");
const positionBtn = document.getElementById("position-btn");
const reviewBtn = document.getElementById("review-btn");
const statusInput = document.getElementById("apply-status");
const loadingScreen = document.getElementById("ingRecruitLoading"); // 로딩 화면 요소
const sortingSelect = document.querySelector(".InpBox.sorting-select");

const showApplyList = ({applies, pagination,ongoingCount, closedCount}) =>{
    listBody.innerHTML='';
    let pagingText = "";

    let text='';

    applies.forEach(apply => {

        if (statusInput.value === 'ongoing') {
            text += `
             <div class="list-status">
                <div class="row -apply-list" id="apply-list-${apply.applyId}">
                    <div class="col-summary">
                        <strong class="corp">
                            <a href="/zf-user/company-info/view?csn=${apply.corporationId}" target="-blank">
                                ${apply.memberName}
                            </a>
                        </strong>
                        <div class="recruit">
                            <a href="/zf-user/jobs/relay/view?rec-idx=${apply.applyId}&view-type=apply-status&t-ref=apply-status-list&t-ref-content=generic" target="-blank">
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
                        <button type="button" class="BtnType SizeM -apply-cancel" data-id="${apply.applyId}">지원합격</button>
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
        } else if (statusInput.value === 'closed') {
            text += `
             <div class="list-status">
                <div class="row -apply-list" id="apply-list-${apply.applyId}">
                    <div class="col-summary">
                        <strong class="corp">
                            <a href="/zf-user/company-info/view?csn=${apply.corporationId}" target="-blank">
                                ${apply.memberName}
                            </a>
                        </strong>
                        <div class="recruit">
                            <a href="/zf-user/jobs/relay/view?rec-idx=${apply.applyId}&view-type=apply-status&t-ref=apply-status-list&t-ref-content=generic" target="-blank">
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
                        <button type="button" class="BtnType SizeM -apply-cancel" data-id="${apply.applyId}">면접합격</button>
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
        } else if (statusInput.value === 'position') {
            text += `
            <div class="list-status">
                <div class="row -apply-list" id="apply-list-${apply.applyId}">
        
                    <div class="col-summary">
                        <strong class="corp">
                            <a href="/zf-user/company-info/view?csn=${apply.corporationId}" target="-blank">
                                ${apply.memberName}
                            </a>
                        </strong>
                        <div class="recruit">
                            <a href="/zf-user/jobs/relay/view?rec-idx=${apply.applyId}&view-type=apply-status&t-ref=apply-status-list&t-ref-content=generic" target="-blank">
                                <span class="division">${apply.noticeTitle}</span>
                                <div class="TipBox">
                                    <span>${apply.noticeJobCategoryName}</span>
                                </div>
                            </a>
                        </div>
                        <div class="attached">
                            <button type="button" class="data -file-down-resume" onclick="document.getElementById('fileInput').click();">이수증 업로드</button>
                            <input type="file" name="file" id="fileInput" style="display: none;">
                        </div>
                        <div class="status">
                            <em class="txt-status">${apply.applyStatus}</em>
                            <span class="txt-sub">미열람</span>
                            <button type="button" class="btn-report -ai-report">
                                <svg></svg> 경쟁력분석
                            </button>
                        </div>
                    </div>
        
                    <div class="col-btns" id="col-btn">
                        <div class="action" >
                            <span class="date-end"></span>
                        </div>
                        <button type="button" class="BtnType SizeM -apply-cancel">후기작성(인턴십)</button>
                    </div>
                </div>
            </div>
            `;
        }  else if (statusInput.value === 'review') {
            text +=`
                <div class="list-status">
                    <div class="row -apply-list" id="apply-list-${apply.applyId}">
            
                        <div class="col-summary">
                            <strong class="corp">
                                <a href="/zf-user/company-info/view?csn=${apply.corporationId}" target="-blank">
                                    ${apply.memberName}
                                </a>
                            </strong>
                            <div class="recruit">
                                <a href="/zf-user/jobs/relay/view?rec-idx=${apply.applyId}&view-type=apply-status&t-ref=apply-status-list&t-ref-content=generic" target="-blank">
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
                                <span class="txt-sub">미열람</span>
                                <button type="button" class="btn-report -ai-report">
                                    <svg aria-hidden="true" focusable="false" class="ic">
                                        <use xlink:href="#icon_report"></use>
                                    </svg>
                                    신고하기
                                </button>
                            </div>
                        </div>
                        <div class="col-btns">
                            <div class="action">
                                <span class="date-end"></span>
                            </div>
                            <button type="button" class="BtnType SizeM -apply-cancel">후기작성(인턴십)</button>
                            <button type="button" id="reviewBtn" class="btn-history -applicant-history" data-review-id="${apply.positionerReviewId}">후기내역</button>
                        </div>

                        <div class="col-history" style="display: none">
                            <div class="view-cont" style="display: block;">
                                <!-- 이모티콘있는곳 -->
                                <div class="info-emoticon">
                                    <dl class="review">
                                        <dt>전반적 평가</dt>
                                        <dd class="spr-review smile">${apply.evaluationOverall}</dd>
                                    </dl>
                                    <dl class="review difficulty">
                                        <dt>난이도</dt>
                                        <dd class="spr-review">${apply.evaluationDifficulty}</dd>
                                    </dl>
                                    <dl class="review result">
                                        <dt>결과</dt>
                                        <dd class="spr-review smile">${apply.evaluationResult}</dd>
                                    </dl>
                                </div>
                                <!-- 인턴십 유형 -->
                                <div class="info-view">
                                    <strong class="tit-view">인턴십 유형</strong>
                                    <ul class="list-item">
                                        <li>${apply.noticeJobCategoryName}</li>
                                    </ul>
                                </div>
                                <!-- 인턴십 팀원 수 -->
                                <div class="info-view">
                                    <strong class="tit-view">팀원 수</strong>
                                    <ul class="list-item">
                                        <li>팀원 5명</li>
                                    </ul>
                                </div>
                                <!-- 진행 및 업무 내용 -->
                                <div class="info-view">
                                    <strong class="tit-view">업무 내용 및 진행 방식</strong>
                                    <p class="txt-desc">
                                        프로젝트 회의 참여 및 코드 리뷰 수행.<br />
                                        팀원들과의 원활한 소통이 필요하며, 적극적인 피드백을 통해 발전 가능.<br />
                                        주 1회 팀 회의 진행, 개별 업무는 자유롭게 진행 가능.
                                    </p>
                                </div>
                                <!-- 인턴십 질문 -->

                                <div class="info-view" id="review-questions-${apply.applyId}">
                                    <strong class="tit-view">인턴십 질문</strong>
                                    <ul class="list-question">
                                    </ul>
                                    <ul class="list-item-1">
                                    </ul>
                                </div>
                                <!-- 특이사항 -->
                                <div class="info-view">
                                    <strong class="tit-view">TIP 및 특이사항</strong>
                                    <p class="txt-desc">
                                        ${apply.positionerReviewTips}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                `;
        }
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
    updateButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const applyId = button.getAttribute('data-id'); // 지원 ID 가져오기
            let newStatus = '';


            // statusInput 값에 따라 newStatus 설정
            if (statusInput.value === 'ongoing') {
                newStatus = '면접 예정';
            } else if (statusInput.value === 'closed') {
                newStatus = '면접 합격';
            } else if (statusInput.value === 'position') {
                newStatus = '인턴십 완료';
            }
            console.log(`지원 ID: ${applyId}, 새 상태: ${newStatus}`);
            const confirmed = confirm(`정말로 '${newStatus}' 상태로 변경하시겠습니까?`); // 상태 변경 확인
            if (confirmed) {
                await applyService.update({ applyId: applyId, applyStatus: newStatus });
                loadApplies(); // 업데이트된 상태를 표시하기 위해 리스트를 새로 로드
            }
        });
    });

    // 버튼 클릭 이벤트 리스너 추가
    document.querySelectorAll('.btn-history').forEach(button => {
        button.addEventListener('click', async (event) => {
            const positionerReviewId = event.currentTarget.dataset.reviewId;
            // 버튼이 속한 applyId를 가져옵니다.
            const applyId = event.currentTarget.closest('.row.-apply-list').id.split('-')[2];

            // 질문과 답변을 가져옵니다.
            await applyService.getReviewQuestions(positionerReviewId, (questions) => {
                // review-questions-${applyId}에 대한 부모 요소 선택
                const reviewContainer = document.querySelector(`#review-questions-${applyId}`);

                // 기존의 내용을 비웁니다.
                reviewContainer.innerHTML = '';

                // 질문과 답변 추가
                questions.forEach(question => {
                    // HTML 문자열을 만들어 추가
                    reviewContainer.innerHTML += `
                    <div class="info-view">
                        <strong class="tit-view"></strong>
                        <ul class="list-question">
                            <li>${question.questionContent}</li>
                        </ul>
                        <ul class="list-item-1">
                            <li>${question.answerContent}</li>
                        </ul>
                    </div>
                `;
                });
            });
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

positionBtn.addEventListener("click", () => {
    statusInput.value = 'position'; // 상태를 마감으로 설정
    loadApplies();
});

reviewBtn.addEventListener("click", () => {
    statusInput.value = 'review'; // 상태를 마감으로 설정
    loadApplies();
});

// 페이지 전환 함수
function goToPage(page) {
    // const order = sortingSelect.value; // 드롭다운에서 선택된 정렬 기준을 가져옵니다. 추가할떄 아래에도 order 추가
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