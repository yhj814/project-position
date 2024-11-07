const MemberListLayout = document.querySelector(".UserTable_container"); // 멤버 목록이 표시될 실제 컨테이너
const MemberListPaging = document.querySelector(".pagination-list"); // 페이지네이션 UL 요소

const showMemberList = ({ members, pagination }) => {
    let text = `
        <div class="UserTable_row UserTable_header">
            <div class="UserTable_cell"><input type="checkbox" class="selectAllCheckbox"/></div>
            <div class="UserTable_cell">이름</div>
            <div class="UserTable_cell">가입일</div>
            <div class="UserTable_cell">이메일</div>
            <div class="UserTable_cell">주소</div>
            <div class="UserTable_cell">전화번호</div>
            <div class="UserTable_cell">상태</div>
            <div class="UserTable_cell">Action</div>
        </div>
    `;

    // 멤버 데이터를 누적하여 추가
    members.forEach((member) => {
        text += `
            <div class="UserTable_row">
                <div class="UserTable_cell"><input type="checkbox" class="userCheckbox"/></div>
                <div class="UserTable_cell">${member.memberName || ''}</div>
                <div class="UserTable_cell">${member.createdDate || ''}</div>
                <div class="UserTable_cell">${member.memberEmail || ''}</div>
                <div class="UserTable_cell">${member.memberAddress || ''}</div>
                <div class="UserTable_cell">${member.memberPhone || ''}</div>
                <div class="UserTable_cell">${member.memberStatus || ''}</div>
                <div class="UserTable_cell"><button class="editBtn">수정</button></div>
            </div>    
        `;
    });

    // 기존의 하드코딩된 헤더를 덮어쓰지 않고 멤버 목록을 추가
    MemberListLayout.innerHTML = text;

    // 페이지 버튼 생성
    let pagingText = '';

    // 처음 페이지로 이동하는 버튼
    pagingText += `
        <li class="pagination-first ${pagination.currentPage === 1 ? 'disabled' : ''}">
            <a href="#" class="pagination-first-link" onclick="goToPage(1)" rel="nofollow">
                <span class="pagination-first-icon" aria-hidden="true">«</span>
            </a>
        </li>
    `;

    // 이전 페이지로 이동하는 버튼
    pagingText += `
        <li class="pagination-prev ${pagination.currentPage === 1 ? 'disabled' : ''}">
            <a href="#" class="pagination-prev-link" onclick="goToPage(${pagination.currentPage - 1})" rel="prev nofollow">
                <span class="pagination-prev-icon" aria-hidden="true">‹</span>
            </a>
        </li>
    `;

    // 페이지 번호 버튼
    for (let i = pagination.startPage; i <= pagination.endPage; i++) {
        pagingText += `
            <li class="pagination-page ${i === pagination.currentPage ? 'active' : ''}">
                <a href="#" class="pagination-page-link" onclick="goToPage(${i})">${i}</a>
            </li>
        `;
    }

    // 다음 페이지로 이동하는 버튼
    pagingText += `
        <li class="pagination-next ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}">
            <a href="#" class="pagination-next-link" onclick="goToPage(${pagination.currentPage + 1})" rel="next nofollow">
                <span class="pagination-next-icon" aria-hidden="true">›</span>
            </a>
        </li>
    `;

    // 마지막 페이지로 이동하는 버튼
    pagingText += `
        <li class="pagination-last ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}">
            <a href="#" class="pagination-last-link" onclick="goToPage(${pagination.totalPages})" rel="nofollow">
                <span class="pagination-last-icon" aria-hidden="true">»</span>
            </a>
        </li>
    `;

    // 페이지네이션을 동적으로 추가
    MemberListPaging.innerHTML = pagingText;
};

// 페이지 이동 함수
const goToPage = async (page) => {
    try {
        const response = await fetch(`/admin/position/members/${page}`);
        const data = await response.json();

        // 페이지 번호를 업데이트하여 active 상태를 유지
        data.pagination.currentPage = page;
        showMemberList(data);
    } catch (error) {
        console.error(`페이지 ${page} 로딩 중 오류 발생:`, error);
    }
};

// // 페이지 이동 함수
// const goToPage = async (page) => {
//     try {
//         const response = await fetch(`/admin/position/members/${page}`);
//         const data = await response.json();
//
//         // 새로운 데이터를 받아 목록을 다시 렌더링
//         showMemberList(data);
//     } catch (error) {
//         console.error(`페이지 ${page} 로딩 중 오류 발생:`, error);
//     }
// };

// const MemberListLayout = document.querySelector(".UserTable_row")
// const MemberListPaging = document.querySelector(".pagination-list")
//
// const showMemberList = ({members, pagination}) => {
//     let text = ``;
//     let pagingText = ``;
//     members.forEach((member) => {
//         text = `
//             <div class="UserTable_row">
//                 <div class="UserTable_cell"><input type="checkbox" class="userCheckbox"/><div/>
//                 <div class="UserTable_cell">${member.memberName || ''}<div/>
//                 <div class="UserTable_cell">${member.createdDate || ''}<div/>
//                 <div class="UserTable_cell">${member.memberEmail || ''}<div/>
//                 <div class="UserTable_cell">${member.memberAddress || ''}<div/>
//                 <div class="UserTable_cell">${member.memberPhone || ''}<div/>
//                 <div class="UserTable_cell">${member.memberStatus || ''}<div/>
//                 <div class="UserTable_cell"><button class="editBtn">수정</button></div>
//             </div>
//         `;
//     });
//     MemberListLayout.innerHTML = text;
//
//     // 페이지 번호를 동적으로 생성
//     for (let i = pagination.startPage; i <= pagination.endPage; i++) {
//         pagingText += `
//             <li class = "pagination-page $(i === pagination.currentPage ? 'active' : ''}">
//                 <a href="#" class="pagination-page-link" onclick="goToPage(${i})">${i}</a>
//             </li>
//         `;
//     }
//
//     MemberListPaging.innerHTML = pagingText;
// }

// // 일반 회원 데이터를 표시하는 함수
// const displayMembers = ({members, pagination}) => {
//     // 일반 회원 행이 표시될 컨테이너 선택
//     const memberListDiv = document.querySelector('#user-section .UserTable_container');
//
//     // 새로운 데이터를 표시하기 위해 기존의 데이터 제거 (헤더 행 제외)
//     const existingRows = memberListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
//     existingRows.forEach(row => row.remove());
//
//     // `members` 배열 내의 각 회원 객체를 반복하며 새 행 생성
//     members.forEach(member => {
//         // 각 회원에 대한 새 행을 생성
//         const memberRow = document.createElement('div');
//         memberRow.classList.add('UserTable_row'); // 행에 스타일 클래스 추가
//
//         // 각 회원 데이터(체크박스, 이름, 생성 날짜, 이메일, 주소, 전화번호, 상태, 수정 버튼)를 포함하는 HTML 작성
//         memberRow.innerHTML = `
//             <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
//             <div class="UserTable_cell">${member.memberName || ''}</div>
//             <div class="UserTable_cell">${member.createdDate || ''}</div>
//             <div class="UserTable_cell">${member.memberEmail || ''}</div>
//             <div class="UserTable_cell">${member.memberAddress || ''}</div>
//             <div class="UserTable_cell">${member.memberPhone || ''}</div>
//             <div class="UserTable_cell">${member.memberStatus || ''}</div>
//             <div class="UserTable_cell"><button class="editBtn">수정</button></div>
//         `;
//
//         // 새로 생성한 회원 행을 컨테이너에 추가
//         memberListDiv.appendChild(memberRow);
//
//     });
//
//     // 페이지네이션 업데이트
//     let pagingText = ``;
//     const paginationList = document.querySelector(".pagination-list");
//
//     // 페이지 이동 함수 정의
//     function goToPage(pageNumber) {
//         const url = `/admin/position/member?page=${pageNumber}`;
//         window.location.href = url; // 선택된 페이지로 이동
//     }
//
//     // 처음, 이전, 다음, 마지막 버튼의 `onclick` 설정
//     document.querySelector(".pagination-first-link").onclick = () => goToPage(1);
//     document.querySelector(".pagination-prev-link").onclick = () => goToPage(pagination.page - 1);
//     document.querySelector(".pagination-next-link").onclick = () => goToPage(pagination.page + 1);
//     document.querySelector(".pagination-last-link").onclick = () => goToPage(pagination.pageCount);
//
//     // 페이지 번호 버튼을 동적으로 생성
//     for (let i = pagination.startPage; i <= pagination.endPage; i++) {
//         if (pagination.page === i) {
//             pagingText += `<li class="pagination-page active"><a href="#" class="pagination-page-link">${i}</a></li>`;
//         } else {
//             pagingText += `<li class="pagination-page"><a href="#" class="pagination-page-link" onclick="goToPage(${i})">${i}</a></li>`;
//         }
//     }
//
//     // 페이지 번호 버튼만 동적으로 추가
//     paginationList.innerHTML = pagingText;
//
// };
//
// // 기업 회원 데이터를 표시하는 함수
// const displayCorporationMembers = (corporateMembers) => {
//     // 기업 회원 행이 표시될 컨테이너 선택
//     const corpListDiv = document.querySelector('#corporation-section .UserTable_container');
//
//     // 새로운 데이터를 추가하기 위해 기존의 데이터 제거 (헤더 행 제외)
//     const existingRows = corpListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
//     existingRows.forEach(row => row.remove());
//
//     // `corporateMembers` 배열 내의 각 기업 회원 객체를 반복하며 새 행 생성
//     corporateMembers.forEach(corporationMember => {
//         // 각 기업 회원에 대한 새 행을 생성
//         const corpRow = document.createElement('div');
//         corpRow.classList.add('UserTable_row'); // 행에 스타일 클래스 추가
//
//         // 각 기업 회원 데이터(체크박스, 회사 이름, 가입 날짜, 이메일, 주소, 전화번호, 사업자 번호, 상태, 수정 버튼)를 포함하는 HTML 작성
//         corpRow.innerHTML = `
//             <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
//             <div class="UserTable_cell">${corporationMember.corporationName}</div>
//             <div class="UserTable_cell">${corporationMember.createdDate}</div>
//             <div class="UserTable_cell">${corporationMember.corporationEmail}</div>
//             <div class="UserTable_cell">${corporationMember.corporationAddress}</div>
//             <div class="UserTable_cell">${corporationMember.corporationGen}</div>
//             <div class="UserTable_cell">${corporationMember.corporationCode}</div>
//             <div class="UserTable_cell"><button class="editBtn">수정</button></div>
//         `;
//
//         // 새로 생성한 기업 회원 행을 컨테이너에 추가
//         corpListDiv.appendChild(corpRow);
//     });
// };



