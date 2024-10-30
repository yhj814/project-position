const noticePaging = document.querySelector(".PageBox");
const listBody = document.querySelector('.list-body');
const sortingSelect = document.querySelector(".sorting-select");

// 공고 목록 데이터를 받아서 DOM에 추가하는 함수
const showNoticeList = ({notices, pagination}) => {
    listBody.innerHTML = ''; // 목록 초기화
    let pagingText = "";

    if (notices.length === 0) {
        listBody.innerHTML = '<p>현재 공고가 없습니다.</p>';
        return;
    }

    let text = ''; // 텍스트 초기화

    notices.forEach(notice => {
        // 마감일까지 남은 일수 계산
        const daysLeft = calculateDaysLeft(notice.noticeWorkEndDate); // noticeWorkEndDate를 사용하여 남은 일수 계산

        text += `
            <div id="rec-${notice.id}" class="list-item">
                <div class="box-item">
                    <div class="col notification-info">
                        <div class="job-tit">
                            <a class="str-tit" id="rec-link-${notice.id}" 
                               href="/zf-user/jobs/relay/view?view-type=list&rec-idx=${notice.id}" 
                               target="_blank" title="${notice.noticeTitle}">
                                <span>${notice.noticeTitle}</span>
                            </a>
                            
                        </div>
                        <div class="job-meta">
                            <span class="job-sector">${notice.noticeJobCategoryName || '직무 미정'}</span>
                        </div>
                    </div>
                    <div class="col recruit-info">
                        <ul>
                            <li><p class="work-place">근무 기간: ${formatDate(notice.noticeWorkStartDate)} ~ ${formatDate(notice.noticeWorkEndDate)}</p></li>
                            <li><p class="career">경력: ${notice.noticeCareer}</p></li>
                            <li><p class="education">학력: ${notice.noticeEducation}</p></li>
                            <li><p class="work-time">근무 시간: ${formatTime(notice.noticeWorkStartTime)} ~ ${formatTime(notice.noticeWorkEndTime)}</p></li>
                        </ul>
                    </div>
                    <div class="col support-info">
                        <button class="sri-btn-md">
                            <span class="sri-btn-immediately">삭제하기</span>
                        </button>
                        <p class="support-detail">
                            <span class="date">D-${daysLeft}일</span>
                            <span class="deadlines">${timeForToday(notice.createdDate)} 등록</span>
                        </p>
                    </div>
                </div>
                <div class="similar-recruit"></div>
            </div>
        `;
    });

    // 누적된 HTML 문자열을 한 번에 설정
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
        noticePaging.innerHTML = pagingText;
};

// 공고 목록 로드 함수
const loadNotices = (page = 1, order = 'recent') => {
    noticeService.getNoticeList(page, order, showNoticeList);
};

// 페이지 전환 함수
function goToPage(page) {
    globalThis.page = page;
    const order = sortingSelect.value; // 드롭다운에서 선택된 정렬 기준을 가져옵니다.
    history.pushState({ page }, "", `corporation-login-main-posting-registration?page=${page}&order=${order}`);
    loadNotices(page, order);
}

// 드롭다운 변경 시 공고 목록 로드
sortingSelect.addEventListener("change", () => {
    const page = 1; // 페이지를 1로 초기화
    const order = sortingSelect.value; // 선택된 정렬 기준
    loadNotices(page, order); // 목록을 다시 로드
});

// 페이지 로드 시 공고 목록 가져오기
document.addEventListener('DOMContentLoaded', () => {
    const order = sortingSelect.value; // 드롭다운에서 기본 정렬 기준 가져오기
    loadNotices(1, order); // 기본 정렬 기준으로 목록 로드
});

// 날짜 형식을 'YYYY-MM-DD'로 변환하는 함수
const formatDate = (dateString) => {
    if (!dateString) return '날짜 정보 없음'; // 날짜 정보가 없을 때의 기본값 설정
    const date = new Date(dateString);
    return isNaN(date) ? '유효하지 않은 날짜' : date.toISOString().split('T')[0]; // 유효한 날짜가 아니면 기본 메시지 반환
};

// 시간 형식을 'HH:MM'로 변환하는 함수
const formatTime = (timeString) => {
    if (!timeString) return '시간 정보 없음'; // 시간 정보가 없을 때의 기본값 설정
    const time = new Date(`1970-01-01T${timeString}Z`);
    return isNaN(time) ? '유효하지 않은 시간' : time.toISOString().substring(11, 16); // 유효한 시간이 아니면 기본 메시지 반환
};

function timeForToday(datetime) {
    const today = new Date();
    const date = new Date(datetime);

    let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

    if (gap < 1) {
        return "방금 전";
    }

    if (gap < 60) {
        return `${gap}분 전`;
    }

    gap = Math.floor(gap / 60);

    if (gap < 24) {
        return `${gap}시간 전`;
    }

    gap = Math.floor(gap / 24);

    if (gap < 31) {
        return `${gap}일 전`;
    }

    gap = Math.floor(gap / 31);

    if (gap < 12) {
        return `${gap}개월 전`;
    }

    gap = Math.floor(gap / 12);

    return `${gap}년 전`;
}

function calculateDaysLeft(endDate) {
    const today = new Date();
    const end = new Date(endDate);

    // 마감일까지의 차이를 밀리초로 계산
    const difference = end - today;

    // 차이를 일수로 계산
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

// 공고 목록 가져오기 및 렌더링
// const loadNotices = () => {
//     noticeService.getNoticeList((notices) => {
//         showNoticeList(notices);
//     });
// };

// // 페이지 로드 시 공고 목록 가져오기
// document.addEventListener('DOMContentLoaded', loadNotices);
