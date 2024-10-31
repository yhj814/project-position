// 일반 회원 데이터를 가져오는 함수
// const Members : 함수선언
// const reponse
const Members = async () => {
    const response = await fetch('/admin/position-api/members');
    const members = await response.json();
    Members(members); // 데이터를 HTML에 표시
};

// 기업 회원 데이터를 가져오는 함수
const CorporatationMembers = async () => {
    const response = await fetch('/admin/position-api/corporatation-members');
    const corporateMembers = await response.json();
    CorporatationMembers(corporateMembers);
};

