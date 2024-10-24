const openButton = document.querySelector(".position-btn-lg.for-btn-event");
const closeButton = document.querySelector(".btn-apply-form-close");
const modalDiv = document.querySelector(".wrap-quick-apply-layer");
const interestButton = document.querySelector(
    ".btn-jview.spr-jview.btn-interest"
);
console.log(openButton);

interestButton.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.classList.toggle("on");
});

openButton.addEventListener("click", (e) => {
    modalDiv.style.display = "block";
});

closeButton.addEventListener("click", (e) => {
    modalDiv.style.display = "none";
});
