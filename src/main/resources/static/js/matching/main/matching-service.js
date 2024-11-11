const matchingService = (() => {
    const getList = async (page, callback) =>{
        page = page || 1;
        const response = await fetch(`/corporation/notices/all-list/${page}`)
        const notices = await response.json();

        if(callback) {
            callback(notices);
        }
    }

    return {getList:getList};
})()