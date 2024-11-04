const applyService = (() => {
    // 공고 목록 조회
    const getApplyList = async (page, order = 'recent',status = 'ongoing', callback) => {
        page = page || 1;
        const response = await fetch(`/applies/list/${page}?order=${order}&status=${status}`);
        const applies = await response.json();
        if (callback) {
            callback(applies);
        }
    };

    // const remove = async (id) => {
    //     await fetch(`/corporation/notice/delete/${id}`, {
    //         method: "delete"
    //     })
    //     updateCounts();
    // }

    const update = async (apply) => {
        await fetch("/apply/update", {
            method:"put",
            body: JSON.stringify(apply),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        updateCounts();
    }

    const updateCounts = async () => {
        // 각 상태에 대한 개수를 다시 조회
        const ongoingResponse = await fetch(`/apply/total?status=ongoing`);
        const closedResponse = await fetch(`/apply/total?status=closed`);

        const ongoingCount = await ongoingResponse.json();
        const closedCount = await closedResponse.json();

        document.getElementById('ongoing-count').textContent = ongoingCount; // 진행 중 개수 업데이트
        document.getElementById('closed-count').textContent = closedCount; // 마감 개수 업데이트
    };

    return { getApplyList: getApplyList, update:update};
})()
