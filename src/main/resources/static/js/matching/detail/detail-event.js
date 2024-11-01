// 카카오 맵
// document.querySelector('.btn-mapview.relay-map').addEventListener('click', () =>{
//     // 주소 가져오기
//     const address = document.querySelector('.spr-jview.txt-adr').innerText;
//
//     // 주소로 위도와 경도를 얻기 위한 API 호출
//     const geocoder = new kakao.maps.services.Geocoder();
//
//     geocoder.addressSearch(address, function(results, status) {
//         if (status === kakao.maps.services.Status.OK) {
//             const coords = new kakao.maps.LatLng(results[0].y, results[0].x); // 위도와 경도
//
//             // Kakao Map URL 생성
//             const url = `https://map.kakao.com/?urlX=${results[0].x}&urlY=${results[0].y}&name=${encodeURIComponent(address)}`;
//
//             // 새 창 열기
//             window.open(url, "_blank"); // 새 탭에서 열기
//
//             // 마커 표시를 위한 코드 (여기서는 사용하지 않음)
//             // 마커를 지도에 표시하려면 아래의 코드도 추가 가능
//             /*
//             const mapContainer = document.createElement('div');
//             const mapOptions = {
//                 center: coords,
//                 level: 3
//             };
//             const map = new kakao.maps.Map(mapContainer, mapOptions);
//             const marker = new kakao.maps.Marker({
//                 position: coords
//             });
//             marker.setMap(map);
//             */
//         } else {
//             alert('주소를 찾을 수 없습니다.');
//         }
//     });
// });

document.querySelector('.btn-mapview.relay-map').addEventListener('click', function() {
    // 주소 가져오기
    const addressElement = document.querySelector('.spr-jview.txt-adr span:last-child'); // 두 번째 span 요소 선택
    const address = addressElement.innerText; // 주소 텍스트 가져오기

    // 주소로 위도와 경도를 얻기 위한 API 호출
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function(results, status) {
        if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(results[0].y, results[0].x); // 위도와 경도

            // Kakao Map URL 생성
            const url = `https://map.kakao.com/?urlX=${results[0].x}&urlY=${results[0].y}&name=${encodeURIComponent(address)}`;

            // 새 창 열기
            window.open(url, "_blank"); // 새 탭에서 열기
        } else {
            alert('주소를 찾을 수 없습니다.');
        }
    });
});