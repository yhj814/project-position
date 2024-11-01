// 파일
const uuid = document.getElementById("uuid");
const path = document.getElementById("path");
const fileInput = document.getElementById("fileInput");
const logoImg = document.getElementById("corporation-logo");
const tipBox = document.querySelector(".TipBox");

fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if(file.type.startsWith("image")){
        const formData = new FormData();
        formData.append("file", file);
        const fileInfo = await corporationService.upload(formData);
        console.log(fileInfo);
        console.log(fileInfo.fileName);
        console.log(fileInfo.filePath);
        uuid.value = fileInfo.fileName.substring(0, fileInfo.fileName.indexOf("_"));
        path.value = fileInfo.filePath;
        logoImg.src = `/file/display?fileName=${fileInfo.filePath}/${fileInfo.fileName}`;
        tipBox.style.display ='none';
    }else{
        alert("이미지 파일이 아닙니다.");
        e.target.value = "";
    }
});