const noticeService = (() => {
    // 공고 목록 조회
    const getNoticeList = async (page, order = 'recent',status = 'ongoing', callback) => {
        page = page || 1;
        const response = await fetch(`/corporation/notices/list/${page}?order=${order}&status=${status}`);
        const notices = await response.json();
        if (callback) {
            callback(notices);
        }
    };

    const remove = async (id) => {
        await fetch(`/corporation/notice/delete/${id}`, {
            method: "delete"
        })
    }

    return { getNoticeList: getNoticeList, remove:remove };
})()
