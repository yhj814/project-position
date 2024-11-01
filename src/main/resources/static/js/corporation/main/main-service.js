const corporationService = (() => {
    const upload = async (formData) => {
        const response = await fetch("/file/profile/upload", {
            method: "post",
            body: formData
        });
        const file = await response.json();
        return file;
    }

    return{upload:upload}
})()

