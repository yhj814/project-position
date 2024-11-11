const noticeLayout = document.getElementById("notice-list");
const noticeTop4Layout = document.getElementById("notice-top-4")

noticeLayout.innerHTML=``;
noticeTop4Layout.innerHTML=``;

const showListScroll = ({notices, pagination}) =>{
    let text=``;

    // 다음 페이지 없을 때,
    if(pagination.rowCount >= notices.length){
        globalThis.loadingFlag = true;
    }else{
        notices.pop();
    }
    notices.forEach((notice) => {
        const fileDTO = notice.fileDTO;
        const logoUrl =`/file/display?fileName=${fileDTO.filePath}/${fileDTO.fileName}`;

        text += `
        <li class="item">
            <a href="" target="-blank" title="${notice.noticeTitle}">
                <span class="logo">
                    <img src="${logoUrl}" alt="${notice.corporationName}">
                </span>
                <strong class="tit">${notice.noticeTitle}</strong>
                <span class="corp">${notice.corporationName}</span>
                <ul class="desc">
                    <li class="company-local ellipsis">${notice.corporationAddress}</li>
                    <li>${notice.noticeCareer}</li>
                    <li>${notice.noticeEducation}
                        <span class="above">이상</span>
                    </li>
                </ul>
                <span class="date">D-2</span>
            </a>
            <button type="button" class="btn-scrap scrap-${notice.id}" title="스크랩">
                <img src="//www.saraminimage.co.kr/common/bul_sri_star.png" alt="스크랩">
            </button>
        </li>
        `;
    });
    noticeLayout.innerHTML += text;
}

let text=``;
top4Notices.notices.forEach((notice) =>{

    const fileDTO = notice.fileDTO;
    const logoUrl =`/file/display?fileName=${fileDTO.filePath}/${fileDTO.fileName}`;

    text+=`
    <li class="item">
            <a href="" target="-blank" title="${notice.noticeTitle}">
                <span class="logo">
                    <img src="${logoUrl}" alt="${notice.corporationName}">
                </span>
                <strong class="tit">${notice.noticeTitle}</strong>
                <span class="corp">${notice.corporationName}</span>
                <ul class="desc">
                    <li class="company-local ellipsis">${notice.corporationAddress}</li>
                    <li>${notice.noticeCareer}</li>
                    <li>${notice.noticeEducation}
                        <span class="above">이상</span>
                    </li>
                </ul>
                <span class="date">D-2</span>
            </a>
            <button type="button" class="btn-scrap scrap-${notice.id}" title="스크랩">
                <img src="//www.saraminimage.co.kr/common/bul_sri_star.png" alt="스크랩">
            </button>
        </li>
    `
})
noticeTop4Layout.innerHTML += text;