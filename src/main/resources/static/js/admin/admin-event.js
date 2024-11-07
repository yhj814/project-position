// 데이터 불러오기 및 표시 실행
// 일반 회원 데이터를 불러와 표시하기 위해 `fetchMembers` 호출
memberService.fetchMembers(1, showMemberList);

// 기업 회원 데이터를 불러와 표시하기 위해 `fetchCorporationMembers` 호출
memberService.fetchCorporationMembers(displayCorporationMembers);