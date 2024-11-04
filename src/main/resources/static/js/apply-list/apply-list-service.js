const applyService = (() => {
    // 공고 목록 조회
    const getApplyList = async (page, order = 'recent',status = 'ongoing', callback) => {
        page = page || 1;
        const response = await fetch(`/applies/list/${page}?order=${order}&status=${status}`);
        const notices = await response.json();
        if (callback) {
            callback(notices);
        }
    };

    // const remove = async (id) => {
    //     await fetch(`/corporation/notice/delete/${id}`, {
    //         method: "delete"
    //     })
    //     updateCounts();
    // }

    const updateCounts = async () => {
        // 각 상태에 대한 개수를 다시 조회
        const ongoingResponse = await fetch(`/corporation/notices/total?status=ongoing`);
        const closedResponse = await fetch(`/corporation/notices/total?status=closed`);

        const ongoingCount = await ongoingResponse.json();
        const closedCount = await closedResponse.json();

        document.getElementById('ongoing-count').textContent = ongoingCount; // 진행 중 개수 업데이트
        document.getElementById('closed-count').textContent = closedCount; // 마감 개수 업데이트
    };

    return { getApplyList: getApplyList};
})()
