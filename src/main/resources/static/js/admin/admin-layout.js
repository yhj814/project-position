// 일반 회원 데이터를 표시하는 함수
// 상태를 문자열로 변환하는 함수
const getStatusLabel = (memberStatus) => {
    switch (Number(memberStatus)) { // 문자열을 숫자로 변환
        case 1:
            return "활동중";
        case 2:
            return "정지";
        case 3:
            return "탈퇴";
        default:
            return ""; // 상태가 정의되지 않았을 때는 빈 문자열 반환
    }
};

const displayMembers = (members) => {
    // 일반 회원 행이 표시될 컨테이너 선택
    const memberListDiv = document.querySelector('#user-section .UserTable_container');

    // 새로운 데이터를 표시하기 위해 기존의 데이터 제거 (헤더 행 제외)
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
            <div class="UserTable_cell">${member.memberName || ''}</div>
            <div class="UserTable_cell">${member.createdDate || ''}</div>
            <div class="UserTable_cell">${member.memberEmail || ''}</div>
            <div class="UserTable_cell">${member.memberAddress || ''}</div>
            <div class="UserTable_cell">${member.memberPhone || ''}</div>
            <div class="UserTable_cell">${getStatusLabel(member.memberStatus) || ''}</div>
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

    // 새로운 데이터를 추가하기 위해 기존의 데이터 제거 (헤더 행 제외)
    const existingRows = corpListDiv.querySelectorAll('.UserTable_row:not(.UserTable_header)');
    existingRows.forEach(row => row.remove());

    // `corporateMembers` 배열 내의 각 기업 회원 객체를 반복하며 새 행 생성
    corporateMembers.forEach(corporationMember => {
        // 각 기업 회원에 대한 새 행을 생성
        const corpRow = document.createElement('div');
        corpRow.classList.add('UserTable_row'); // 행에 스타일 클래스 추가

        // 각 기업 회원 데이터(체크박스, 회사 이름, 가입 날짜, 이메일, 주소, 전화번호, 사업자 번호, 상태, 수정 버튼)를 포함하는 HTML 작성
        corpRow.innerHTML = `
            <div class="UserTable_cell"><input type="checkbox" class="userCheckbox" /></div>
            <div class="UserTable_cell">${corporationMember.corporationName}</div>
            <div class="UserTable_cell">${corporationMember.createdDate}</div>
            <div class="UserTable_cell">${corporationMember.corporationEmail}</div>
            <div class="UserTable_cell">${corporationMember.corporationAddress}</div>
            <div class="UserTable_cell">${corporationMember.corporationGen}</div>
            <div class="UserTable_cell">${corporationMember.corporationCode}</div>
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

