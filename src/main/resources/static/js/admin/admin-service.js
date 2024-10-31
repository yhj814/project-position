// memberService 객체 생성
const memberService = (() => {
    // 일반 회원 데이터를 서버에서 가져오는 비동기
    const fetchMembers = async (callback) => {
        try {
            // /admin/position/members 경로로 GET 요청
            const response = await fetch('/admin/position/members');

            // 응답 실패 상태일 경우 에러 메시지
            if (!response.ok) throw new Error('회원 정보 fetch 실패');
            // 응답 데이터를 json으로 파싱
            const members = await response.json();
            // 콜백 함수가 생길 경우, 가져온 데이터를 콜백 함수에 전달
            if (callback) {
                callback(members);
            }
        } catch (error) {
            // 오류가 발생할 경우 에러 메시지를 출력
            console.error("오류입니다:", error);
        }
    };

    const fetchCorporationMembers = async (callback) => {
        try {
            const response = await fetch('/admin/position/corporation-members');
            if (!response.ok) throw new Error('기업 회원 정보 fetch 실패');

            const corporateMembers = await response.json();
            if (callback) {
                callback(corporateMembers);
            }
        } catch (error) {
            console.error("Error fetching corporation members:", error);
        }
    };

    return { fetchMembers: fetchMembers, fetchCorporationMembers: fetchCorporationMembers };
})();

// 회원 정보 표시
// function displayMembers(members) {
//     const memberListDiv = document.querySelector('#user-section .UserTable_container');
//
//     // 헤더 행을 제외하고 기존 데이터 행 제거
//     const existingRows = memberListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
//     existingRows.forEach(row => row.remove());
//
//     // 새로운 회원 데이터 행 추가
//     members.forEach(member => {
//         const memberRow = document.createElement('div');
//         memberRow.classList.add('UserTable_row');
//         memberRow.innerHTML = `
//             <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
//             <div class="UserTable_cell">${member.memberName}</div>
//             <div class="UserTable_cell">${member.createDate}</div>
//             <div class="UserTable_cell">${member.memberEmail}</div>
//             <div class="UserTable_cell">${member.memberAdress}</div>
//             <div class="UserTable_cell">${member.memberPhone}</div>
//             <div class="UserTable_cell">${member.memberStatus}</div>
//             <div class="UserTable_cell"><button class="editBtn">수정</button></div>
//         `;
//         memberListDiv.appendChild(memberRow);
//     });
// }
//
// // 기업 회원 데이터 표시 함수
// function displayCorporationMembers(corporateMembers) {
//     const corpListDiv = document.querySelector('#corporation-section .UserTable_container');
//
//     // 헤더 행을 제외하고 기존 데이터 행 제거
//     const existingRows = corpListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
//     existingRows.forEach(row => row.remove());
//
//     // 새로운 기업 회원 데이터 행 추가
//     corporateMembers.forEach(corpMember => {
//         const corpRow = document.createElement('div');
//         corpRow.classList.add('UserTable_row');
//         corpRow.innerHTML = `
//             <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
//             <div class="UserTable_cell">${corpMember.companyName}</div>
//             <div class="UserTable_cell">${corpMember.joinDate}</div>
//             <div class="UserTable_cell">${corpMember.email}</div>
//             <div class="UserTable_cell">${corpMember.address}</div>
//             <div class="UserTable_cell">${corpMember.phone}</div>
//             <div class="UserTable_cell">${corpMember.businessNumber}</div>
//             <div class="UserTable_cell">${corpMember.status}</div>
//             <div class="UserTable_cell"><button class="editBtn">수정</button></div>
//         `;
//         corpListDiv.appendChild(corpRow);
//     });
// }
//
// 데이터 로딩 실행
memberService.fetchMembers(displayMembers); // 일반 회원 목록 표시
memberService.fetchCorporationMembers(displayCorporationMembers); // 기업 회원 목록 표시

const displayMembers = (members) => {
    const memberListDiv = document.querySelector('#user-section .UserTable_container');

    // 헤더 행을 제외하고 기존 데이터 행 제거
    const existingRows = memberListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
    existingRows.forEach(row => row.remove());

    // 새로운 회원 데이터 행 추가
    members.forEach(member => {
        const memberRow = document.createElement('div');
        memberRow.classList.add('UserTable_row');
        memberRow.innerHTML = `
            <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
            <div class="UserTable_cell">${member.memberName}</div>
            <div class="UserTable_cell">${member.createdDate}</div>
            <div class="UserTable_cell">${member.memberEmail}</div>
            <div class="UserTable_cell">${member.memberAdress}</div>
            <div class="UserTable_cell">${member.memberPhone}</div>
            <div class="UserTable_cell">${member.memberStatus}</div>
            <div class="UserTable_cell"><button class="editBtn">수정</button></div>
        `;
        memberListDiv.appendChild(memberRow);
    });
};

const displayCorporationMembers = (corporateMembers) => {
    const corpListDiv = document.querySelector('#corporation-section .UserTable_container');

    // 헤더 행을 제외하고 기존 데이터 행 제거
    const existingRows = corpListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
    existingRows.forEach(row => row.remove());

    // 새로운 기업 회원 데이터 행 추가
    corporateMembers.forEach(corporationMember => {
        const corpRow = document.createElement('div');
        corpRow.classList.add('UserTable_row');
        corpRow.innerHTML = `
            <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
            <div class="UserTable_cell">${corporationMember.corporationName}</div>
            <div class="UserTable_cell">${corporationMember.createdDate}</div>
            <div class="UserTable_cell">${corporationMember.corporationEmail}</div>
            <div class="UserTable_cell">${corporationMember.corporationAddress}</div>
            <div class="UserTable_cell">${corporationMember.corporationGen}</div>
            <div class="UserTable_cell">${corporationMember.corporationCode}</div>
            <div class="UserTable_cell">${corporationMember.status}</div>
            <div class="UserTable_cell"><button class="editBtn">수정</button></div>
        `;
        corpListDiv.appendChild(corpRow);
    });
};

// 데이터 로딩 실행
memberService.fetchMembers(displayMembers); // 일반 회원 목록 표시
memberService.fetchCorporationMembers(displayCorporationMembers); // 기업 회원 목록 표시

// 일반 회원 데이터를 표시하는 함수
const displayMembers = (members) => {
    // 일반 회원 행이 표시될 컨테이너 선택
    const memberListDiv = document.querySelector('#user-section .UserTable_container');

    // 기존의 데이터 행을 삭제하여 새로운 데이터를 표시하기 전에 깨끗한 상태로 만듦 (헤더 행 제외)
    const existingRows = memberListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
    existingRows.forEach(row => row.remove());

    // `members` 배열 내의 각 회원 객체를 반복하며 새 행 생성
    members.forEach(member => {
        // 각 회원에 대한 새 행을 생성
        const memberRow = document.createElement('div');
        memberRow.classList.add('UserTable_row'); // 행에 스타일 클래스 추가

        // 각 회원 데이터(체크박스, 이름, 생성 날짜, 이메일, 주소, 전화번호, 상태, 수정 버튼)를 포함하는 HTML 작성
        memberRow.innerHTML = `
            <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
            <div class="UserTable_cell">${member.memberName}</div>
            <div class="UserTable_cell">${member.createdDate}</div>
            <div class="UserTable_cell">${member.memberEmail}</div>
            <div class="UserTable_cell">${member.memberAdress}</div>
            <div class="UserTable_cell">${member.memberPhone}</div>
            <div class="UserTable_cell">${member.memberStatus}</div>
            <div class="UserTable_cell"><button class="editBtn">수정</button></div>
        `;

        // 새로 생성한 회원 행을 컨테이너에 추가
        memberListDiv.appendChild(memberRow);
    });
};

// 기업 회원 데이터를 표시하는 함수
const displayCorporationMembers = (corporateMembers) => {
    // 기업 회원 행이 표시될 컨테이너 선택
    const corpListDiv = document.querySelector('#corporation-section .UserTable_container');

    // 기존의 데이터 행을 삭제하여 새로운 데이터를 표시하기 전에 깨끗한 상태로 만듦 (헤더 행 제외)
    const existingRows = corpListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
    existingRows.forEach(row => row.remove());

    // `corporateMembers` 배열 내의 각 기업 회원 객체를 반복하며 새 행 생성
    corporateMembers.forEach(corpMember => {
        // 각 기업 회원에 대한 새 행을 생성
        const corpRow = document.createElement('div');
        corpRow.classList.add('UserTable_row'); // 행에 스타일 클래스 추가

        // 각 기업 회원 데이터(체크박스, 회사 이름, 가입 날짜, 이메일, 주소, 전화번호, 사업자 번호, 상태, 수정 버튼)를 포함하는 HTML 작성
        corpRow.innerHTML = `
            <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
            <div class="UserTable_cell">${corpMember.companyName}</div>
            <div class="UserTable_cell">${corpMember.joinDate}</div>
            <div class="UserTable_cell">${corpMember.email}</div>
            <div class="UserTable_cell">${corpMember.address}</div>
            <div class="UserTable_cell">${corpMember.phone}</div>
            <div class="UserTable_cell">${corpMember.businessNumber}</div>
            <div class="UserTable_cell">${corpMember.status}</div>
            <div class="UserTable_cell"><button class="editBtn">수정</button></div>
        `;

        // 새로 생성한 기업 회원 행을 컨테이너에 추가
        corpListDiv.appendChild(corpRow);
    });
};

// 데이터 불러오기 및 표시 실행
// 일반 회원 데이터를 불러와 표시하기 위해 `fetchMembers` 호출
memberService.fetchMembers(displayMembers);

// 기업 회원 데이터를 불러와 표시하기 위해 `fetchCorporationMembers` 호출
memberService.fetchCorporationMembers(displayCorporationMembers);


