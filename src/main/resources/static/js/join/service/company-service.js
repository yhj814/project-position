const companyService = (() => {
    const checkId = async (corporationEmail, callback) => {
        const response = await fetch(`/join/company/check-id?corporationEmail=${corporationEmail}`);
        const result = await response.json() == 1;
        if(callback){
            callback(result);
        }
    }

    const upload = async (formData) => {
        const response = await fetch("/file/upload", {
            method: "post",
            body: formData
        });
        const file = await response.json();
        return file;
    }

    return {checkId: checkId, upload: upload};
})()