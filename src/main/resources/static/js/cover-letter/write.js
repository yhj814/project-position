document.addEventListener("DOMContentLoaded", function () {
    // Tooltip 버튼에 마우스 오버 시 tooltip 보이기
    document
        .querySelector(".title-edit-title-tootip-btn")
        .addEventListener("mouseenter", function () {
            document.querySelector(".tooltip-tooltip").style.display = "block";
        });

    // Tooltip 버튼에서 마우스가 벗어났을 때 tooltip 숨기기
    document
        .querySelector(".title-edit-title-tootip-btn")
        .addEventListener("mouseleave", function () {
            document.querySelector(".tooltip-tooltip").style.display = "none";
        });

    // 질문 on/off 스위치 변경 시 입력 필드 및 버튼 보이기/숨기기
    document
        .querySelector("#question-on-off")
        .addEventListener("change", function () {
            const parentDiv = this.closest(".questionedit-question-edit");
            const inputField = document.querySelector(".input-input-2");
            const questionButton = document.querySelector(
                ".questionedit-question-btn"
            );

            if (this.checked) {
                parentDiv.classList.add("questionedit-question-edit-expand");
                inputField.style.display = "block";
                questionButton.style.display = "block";
            } else {
                parentDiv.classList.remove("questionedit-question-edit-expand");
                inputField.style.display = "none";
                questionButton.style.display = "none";
            }
        });

    // 제목 삭제 버튼 클릭 시 입력 필드 초기화
    document
        .querySelector(".title-edit-title-delete")
        .addEventListener("click", function () {
            document.querySelector(".input-input-input").value = "";
        });

    // textarea 요소 선택
    const textarea = document.querySelector(
        ".contentedit-content-edit-content"
    );
    const placeholder = document.querySelector(
        ".contentedit-content-placeholder"
    );
    const charCountSpan = document.querySelector(
        ".contentcount-content-count span"
    );
    const contentCountDiv = document.querySelector(
        ".contentcount-content-count"
    );
    const maxCharCount = 500; // 최대 글자 수

    // 입력 이벤트 리스너 추가
    textarea.addEventListener("input", function () {
        const content = textarea.value;
        const charCount = content.length;

        // 글자가 입력되면 placeholder 숨기기
        if (charCount > 0) {
            placeholder.classList.remove(
                "contentedit-content-placeholder-show"
            );
        } else {
            placeholder.classList.add("contentedit-content-placeholder-show");
        }

        // 글자 수 업데이트
        charCountSpan.textContent = charCount;

        // 500자를 초과할 경우 글자 색상 빨간색으로 변경
        if (charCount > maxCharCount) {
            contentCountDiv.style.color = "red";
        } else {
            contentCountDiv.style.color = ""; // 기본 색상으로 복구
        }
    });

    // 질문 버튼 클릭 시 모달 열기
    document
        .querySelector(".questionedit-question-btn")
        .addEventListener("click", function () {
            document
                .querySelector(".modal-modal")
                .classList.remove("modal-modal-hidden");
        });

    // 모달 닫기 버튼 클릭 시 모달 숨기기
    document
        .querySelector(".modal-modal-close-dimmed")
        .addEventListener("click", function () {
            document
                .querySelector(".modal-modal")
                .classList.add("modal-modal-hidden");
        });

    // "취소" 버튼 클릭 시 모달 숨기기
    document
        .querySelector(".button-button-color-grayinvert")
        .addEventListener("click", function () {
            document
                .querySelector(".modal-modal")
                .classList.add("modal-modal-hidden");
        });

    // "적용" 버튼 클릭 시 선택된 값을 '문항' 섹션의 input 태그에 넣고 모달 숨기기
    document
        .querySelector(".button-button-color-blue-insert")
        .addEventListener("click", function () {
            // 선택된 라디오 버튼의 value 가져오기
            const selectedRadio = document.querySelector(
                "input[name='resultGroup']:checked"
            );

            // 선택된 라디오 버튼의 값을 콘솔에 출력하여 확인
            if (selectedRadio) {
                console.log("선택한 값: ", selectedRadio.value); // 콘솔에 선택한 값 출력

                // 'input-input-2' 클래스의 div 안에 있는 'input-input-input' input 태그를 선택
                const inputField = document.querySelector(
                    ".input-input-2 .input-input-input"
                );

                inputField.value = selectedRadio.value; // 선택된 값을 input 필드에 넣기
                inputField.setAttribute("value", selectedRadio.value); // 속성으로도 설정
            } else {
                console.log("라디오 버튼이 선택되지 않았습니다.");
            }

            // 모달창 숨기기
            document
                .querySelector(".modal-modal")
                .classList.add("modal-modal-hidden");
        });

    // 카테고리 버튼 클릭 시 라디오 그룹 변경
    const categoryButtons = document.querySelectorAll(
        ".questionedit-example-layer-examples-category"
    );
    const resultContainer = document.querySelector(
        ".radiogroup-rdogroup-vertical"
    );
    const categoriesList = document.querySelector(
        ".questionedit-example-layer-examples-categories ul"
    );

    const createDivWithContent = (htmlContent) => {
        const div = document.createElement("div");
        div.innerHTML = htmlContent;
        return div;
    };

    const views = [
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="가족소개"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                가족소개
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성장과정"
                                
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                성장과정
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_2"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="학창시절"
                            />
                            <label for="result_2" class="radio-rdo-lbl">
                                학창시절
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_3"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="교외활동"
                            />
                            <label for="result_3" class="radio-rdo-lbl">
                                교외활동
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_4"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="전공선택 이유와 적성"
                            />
                            <label for="result_4" class="radio-rdo-lbl">
                                전공선택 이유와 적성
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_5"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성격의 장단점"
                            />
                            <label for="result_5" class="radio-rdo-lbl">
                                성격의 장단점
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_6"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="생활신조"
                            />
                            <label for="result_6" class="radio-rdo-lbl">
                                생활신조
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_7"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="지원동기"
                            />
                            <label for="result_7" class="radio-rdo-lbl">
                                지원동기
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_8"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="입사 후 포부"
                            />
                            <label for="result_8" class="radio-rdo-lbl">
                                입사 후 포부
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="가족소개"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                가족소개
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성장과정"
                                
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                성장과정
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_2"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="학창시절"
                            />
                            <label for="result_2" class="radio-rdo-lbl">
                                학창시절
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="가족소개"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                가족소개1
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성장과정"
                                
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                성장과정1
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_2"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="학창시절"
                            />
                            <label for="result_2" class="radio-rdo-lbl">
                                학창시절1
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_6"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="생활신조"
                            />
                            <label for="result_6" class="radio-rdo-lbl">
                                생활신조1
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="지원동기"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                test
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="입사 후 포부"
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                test2
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="가족소개"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                가족소개
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성장과정"
                                
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                성장과정
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_2"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="학창시절"
                            />
                            <label for="result_2" class="radio-rdo-lbl">
                                학창시절
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_3"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="교외활동"
                            />
                            <label for="result_3" class="radio-rdo-lbl">
                                교외활동
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_4"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="전공선택 이유와 적성"
                            />
                            <label for="result_4" class="radio-rdo-lbl">
                                전공선택 이유와 적성
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_5"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성격의 장단점"
                            />
                            <label for="result_5" class="radio-rdo-lbl">
                                test
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="가족소개"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                가족소개1
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성장과정"
                                
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                성장과정2
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_2"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="학창시절"
                            />
                            <label for="result_2" class="radio-rdo-lbl">
                                학창시절3
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_3"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="교외활동"
                            />
                            <label for="result_3" class="radio-rdo-lbl">
                                교외활동4
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="가족소개"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                test1
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성장과정"
                                
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                test2
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="가족소개"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                test
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성장과정"
                                
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                test
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                <div
                    class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                    style="gap: 16px"
                >
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_0"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="가족소개"
                            />
                            <label for="result_0" class="radio-rdo-lbl">
                                test1
                            </label>
                        </span>
                    </div>
                    <div class="radio-radio">
                        <span class="radio-rdo rdi-size-m">
                            <input
                                type="radio"
                                id="result_1"
                                name="resultGroup"
                                class="radio-rdo-input"
                                value="성장과정"
                                
                            />
                            <label for="result_1" class="radio-rdo-lbl">
                                test2
                            </label>
                        </span>
                    </div>
                </div>
            `),
        () =>
            createDivWithContent(`
                    <div
                        class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                        style="gap: 16px"
                    >
                        <div class="radio-radio">
                            <span class="radio-rdo rdi-size-m">
                                <input
                                    type="radio"
                                    id="result_0"
                                    name="resultGroup"
                                    class="radio-rdo-input"
                                    value="가족소개"
                                />
                                <label for="result_0" class="radio-rdo-lbl">
                                    test3
                                </label>
                            </span>
                        </div>
                        <div class="radio-radio">
                            <span class="radio-rdo rdi-size-m">
                                <input
                                    type="radio"
                                    id="result_1"
                                    name="resultGroup"
                                    class="radio-rdo-input"
                                    value="성장과정"
                                    
                                />
                                <label for="result_1" class="radio-rdo-lbl">
                                    test4
                                </label>
                            </span>
                        </div>
                    </div>
                `),
        () =>
            createDivWithContent(`
                        <div
                            class="radiogroup-rdogroup radiogroup-rdogroup-vertical"
                            style="gap: 16px"
                        >
                            <div class="radio-radio">
                                <span class="radio-rdo rdi-size-m">
                                    <input
                                        type="radio"
                                        id="result_0"
                                        name="resultGroup"
                                        class="radio-rdo-input"
                                        value="가족소개"
                                    />
                                    <label for="result_0" class="radio-rdo-lbl">
                                        test5
                                    </label>
                                </span>
                            </div>
                            <div class="radio-radio">
                                <span class="radio-rdo rdi-size-m">
                                    <input
                                        type="radio"
                                        id="result_1"
                                        name="resultGroup"
                                        class="radio-rdo-input"
                                        value="성장과정"
                                        
                                    />
                                    <label for="result_1" class="radio-rdo-lbl">
                                        test6
                                    </label>
                                </span>
                            </div>
                        </div>
                    `),
    ];

    categoryButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const selectedButton = document.querySelector(
                ".questionedit-example-layer-examples-category-selected"
            );
            if (selectedButton) {
                selectedButton.classList.remove(
                    "questionedit-example-layer-examples-category-selected"
                );
            }
            this.classList.add(
                "questionedit-example-layer-examples-category-selected"
            );
            if (views[index]) {
                resultContainer.innerHTML = "";
                resultContainer.appendChild(views[index]());
            }
        });
    });
});
