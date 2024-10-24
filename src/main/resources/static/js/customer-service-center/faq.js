// 1번 질문과 그와 관련된것들
const an1date1 = document.querySelector(".answer-1-date1");
const an1date2 = document.querySelector(".answer-1-date2");
const an1view = document.querySelector(".answer-1-view");
const help1 = document.querySelector(".help-1");
const help1Close = document.querySelector(".help-1-close");
const answer1 = document.querySelector(".answer-1");

help1.addEventListener("click", () => {
    answer1.style.display = "block";
    help1Close.style.display = "block";
    an1date1.style.display = "block";
    an1date2.style.display = "block";
    an1view.style.display = "block";
});

help1Close.addEventListener("click", () => {
    answer1.style.display = "none";
    help1Close.style.display = "none";
    an1date1.style.display = "none";
    an1date2.style.display = "none";
    an1view.style.display = "none";
});

// 2번 질문과 그와 관련된것들
const an2date1 = document.querySelector(".answer-2-date1");
const an2date2 = document.querySelector(".answer-2-date2");
const an2view = document.querySelector(".answer-2-view");
const help2 = document.querySelector(".help-2");
const help2Close = document.querySelector(".help-2-close");
const answer2 = document.querySelector(".answer-2");

help2.addEventListener("click", () => {
    answer2.style.display = "block";
    help2Close.style.display = "block";
    an2date1.style.display = "block";
    an2date2.style.display = "block";
    an2view.style.display = "block";
});

help2Close.addEventListener("click", () => {
    answer2.style.display = "none";
    help2Close.style.display = "none";
    an2date1.style.display = "none";
    an2date2.style.display = "none";
    an2view.style.display = "none";
});

// 3번 질문과 그와 관련된것들
const an3date1 = document.querySelector(".answer-3-date1");
const an3date2 = document.querySelector(".answer-3-date2");
const an3view = document.querySelector(".answer-3-view");
const help3 = document.querySelector(".help-3");
const help3Close = document.querySelector(".help-3-close");
const answer3 = document.querySelector(".answer-3");

help3.addEventListener("click", () => {
    answer3.style.display = "block";
    help3Close.style.display = "block";
    an3date1.style.display = "block";
    an3date2.style.display = "block";
    an3view.style.display = "block";
});

help3Close.addEventListener("click", () => {
    answer3.style.display = "none";
    help3Close.style.display = "none";
    an3date1.style.display = "none";
    an3date2.style.display = "none";
    an3view.style.display = "none";
});

// 4번 질문과 그와 관련된것들
const an4date1 = document.querySelector(".answer-4-date1");
const an4date2 = document.querySelector(".answer-4-date2");
const an4view = document.querySelector(".answer-4-view");
const help4 = document.querySelector(".help-4");
const help4Close = document.querySelector(".help-4-close");
const answer4 = document.querySelector(".answer-4");

help4.addEventListener("click", () => {
    answer4.style.display = "block";
    help4Close.style.display = "block";
    an4date1.style.display = "block";
    an4date2.style.display = "block";
    an4view.style.display = "block";
});

help4Close.addEventListener("click", () => {
    answer4.style.display = "none";
    help4Close.style.display = "none";
    an4date1.style.display = "none";
    an4date2.style.display = "none";
    an4view.style.display = "none";
});

const tabEnterprise = document.querySelector(".tab-enterprise");

const tabIndividual = document.querySelector(".tab-individual");

const individual = document.querySelector(".individual");

const enterprise = document.querySelector(".enterprise");

tabEnterprise.addEventListener("click", () => {
    individual.style.display = "none";
    enterprise.style.display = "block";
});

tabIndividual.addEventListener("click", () => {
    individual.style.display = "block";
    enterprise.style.display = "none";
});
