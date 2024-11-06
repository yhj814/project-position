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
    // 후기 질문 조회
    const getReviewQuestions = async (positionerReviewId, callback) => {
        const response = await fetch(`/review/question?positionerReviewId=${positionerReviewId}`);

        const questions = await response.json();
        if (callback) {
            callback(questions);
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
    const upload = async (formData) => {
        const response = await fetch("/certification/upload", {
            method: "post",
            body: formData
        });

        return;
    }

    const updateCounts = async () => {
        // 각 상태에 대한 개수를 다시 조회
        const ongoingResponse = await fetch(`/apply/total?status=ongoing`);
        const closedResponse = await fetch(`/apply/total?status=closed`);
        const positionResponse = await fetch(`/apply/total?status=position`);
        const reviewResponse = await fetch(`/apply/total?status=review`);

        const ongoingCount = await ongoingResponse.json();
        const closedCount = await closedResponse.json();
        const positionCount = await positionResponse.json();
        const reviewCount = await reviewResponse.json();

        document.getElementById('ongoing-count').textContent = ongoingCount; // 지원 개수 업데이트
        document.getElementById('closed-count').textContent = closedCount; // 면접 개수 업데이트
        document.getElementById('position-count').textContent = positionCount; // 인턴십 개수 업데이트
        document.getElementById('review-count').textContent = reviewCount; // 후기 개수 업데이트
    };

    return { getApplyList: getApplyList, update:update,getReviewQuestions:getReviewQuestions, upload: upload};
})()
