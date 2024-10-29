const memberService = (() => {
    const checkId = async (memberEmail, callback) => {
        const response = await fetch(`/join/check-id?memberEmail=${memberEmail}`);
        const result = await response.json() == 1;
        if(callback){
            callback(result);
        }
    }

    const checkPhone = async (memberPhone, callback) => {
        const response = await fetch(`/join/check-phone?memberPhone=${memberPhone}`);
        const result = await response.json() == 1;
        if(callback){
            callback(result);
        }
    }

    const certificatePhone = async (memberPhone) => {
        const response = await fetch(`/certification/phone?memberPhone=${memberPhone}`);
        return await response.json();
    }

    return {checkId: checkId, checkPhone: checkPhone, certificatePhone: certificatePhone};
})()