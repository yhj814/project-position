// 카카오 맵
document.querySelector('.btn-mapview.relay-map').addEventListener('click', (event) => {
    event.preventDefault(); // 링크 기본 동작 방지

    // 주소 가져오기
    const addressElement = document.getElementById('address');
    const address = addressElement.innerText; // 주소 텍스트 가져오기

    // 주소로 위도와 경도를 얻기 위한 API 호출
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function(results, status) {
        if (status === kakao.maps.services.Status.OK) {
            const url = `https://map.kakao.com/link/search/${encodeURIComponent(address)}`;

            // 새 창 열기
            window.open(url, "_blank"); // 새 탭에서 열기
        } else {
            alert('주소를 찾을 수 없습니다. 상태: ' + status);
        }
    });
});


function formatSalesAmount(amount) {
    let formatted = '';

    const trillion = Math.floor(amount / 100_000_000); // 조 단위
    if (trillion > 0) {
        formatted += `${trillion}조 `;
        amount %= 100_000_000;
    }

    const billion = Math.floor(amount / 10_000); // 억 단위
    if (billion > 0) {
        formatted += `${billion}억 `;
        amount %= 10_000;
    }

    const million = Math.floor(amount / 1); // 만 단위 (1은 10,000 원 단위로 입력 받기 때문에 그대로 사용)
    if (million > 0) {
        formatted += `${million}만원 `;
    }

    return formatted.trim();
}

// HTML 로드 후 실행
window.addEventListener('DOMContentLoaded', () => {
    const salesElement = document.getElementById("company-summary-tit");
    const salesAmount = parseInt(salesElement.innerText.replace(/[^0-9]/g, ''), 10); // 텍스트에서 숫자 추출
    salesElement.innerText = formatSalesAmount(salesAmount);
});