globalThis.page = 1;
matchingService.getList(globalThis.page, showListScroll);

globalThis.loadingFlag = false;
window.addEventListener("scroll", (e) => {
    console.log(window.innerHeight + window.scrollY)
    console.log(document.body.offsetHeight)
    console.log(loadingFlag);
    if(loadingFlag){
        globalThis.loadingFlag = false;
        return;
    }

    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        globalThis.loadingFlag = true;
        matchingService.getList(++globalThis.page, showListScroll);
    }
})