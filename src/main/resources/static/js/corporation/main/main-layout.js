
// 파일
const uuid = document.getElementById("uuid");
const path = document.getElementById("path");
const fileInput = document.getElementById("fileInput");
const logoImg = document.getElementById("corporation-logo");
// const tipBox = document.querySelector(".TipBox");

fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith("image")) {
        const formData = new FormData(document.getElementById("uploadForm"));
        // 여기에 파일을 추가
        formData.append("file", file);

        // 파일 업로드 요청
        const fileInfo = await corporationService.upload(formData);
        console.log("File Info:", fileInfo); // fileInfo 내용을 확인합니다.

        // uuid와 path 값을 업데이트
        uuid.value = fileInfo.fileName.substring(0, fileInfo.fileName.indexOf("_"));
        path.value = fileInfo.filePath;

        logoImg.src = `/file/display?fileName=${fileInfo.filePath}/${fileInfo.fileName}`;
        tipBox.style.display = 'none';

        // 폼 자동 제출
        document.getElementById("uploadForm").submit();
    } else {
        alert("이미지 파일이 아닙니다.");
        e.target.value = "";
    }
});
