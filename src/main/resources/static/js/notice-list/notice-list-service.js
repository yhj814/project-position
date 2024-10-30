const noticeService = (() => {
    // 공고 목록 조회
    const getNoticeList = async (callback) => {
            const response = await fetch("/corporation/notices/list");
            const notices = await response.json();

            if (callback) {
                callback(notices);
            }
    };

    return { getNoticeList: getNoticeList };
})();
