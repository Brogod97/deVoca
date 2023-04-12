(function () {
    var doms = "";
    var $m = $(".progress");
    var $data = $m.find("span");
    var data = $m.data("percent");
    var com = Math.round((data / 100) * 360);
    var dur = 2000;

    var getVendorPrefix = function () {
        var body = document.body || document.documentElement,
            style = body.style,
            transition = "Transition",
            vendor = ["Moz", "Webkit", "ms"],
            lastGage,
            i = 0;
        while (i < vendor.length) {
            if (typeof style[vendor[i] + transition] === "string") {
                return vendor[i];
            }
            i++;
        }
        return false;
    };
    var prefix = getVendorPrefix();
    var transform = prefix + "Transform";

    for (var i = 0; i <= com; i++) {
        doms = '<div class="gage-bar"></div>';
        $m.append(doms);
        $(".gage-bar:last").css(transform, "rotate(" + i + "deg)");
    }

    //$m.append(doms);

    $m.find("div").each(function (index, item) {
        $(item)
            .stop()
            .delay(index * 5)
            .fadeIn(50);
    });

    for (var j = 0; j <= data; j++) {
        (function (index) {
            var time = (360 / 100) * index * 5;
            setTimeout(function () {
                $data.text(index + "%");
            }, time);
        })(j);
    }
})();

// -------------------------------------------------------------------
/** vocaModal, bg를 갖고있는 부모 */
const modal = document.getElementById("modal");

/** 모달 활성화 시 뒤에 표시되는 검은 배경 */
const bgBlur = document.querySelector(".bg");

// 단어 목록 - 단어 onclick 호출 함수
function selectOneWordAjax(wordNo) {
    $.ajax({
        url: "selectWordOne",
        data: { wordNo: wordNo },
        type: "POST",
        success: function (result) {
            const word = JSON.parse(result);
            setWordInfo(word);

            modal.style.display = "flex";
        },
        error: function () {
            console.log("서버 요청 실패");
        },
    });
}

// 모달 외부 영역 클릭 시 비활성화 이벤트
bgBlur.addEventListener("click", function () {
    modal.style.display = "none";
});

/** 전달받은 parent(voca-modalBox)에 child 객체의 정보(WORD의 정보)를 이용해 단어 내부 값 교체하는 함수 */
function setWordInfo(child) {
    const wordTitle = document.getElementById("voca-read-title");
    const definition = document.getElementById("voca-read-definition");
    const memo = document.getElementById("voca-read-memo");
    const codeBlock = document.querySelector(".voca-code-block-area");

    wordTitle.value = child.wordTitle;
    definition.value = child.wordDf;
    memo.value = child.wordMemo;
    codeBlock.innerHTML = child.codeBlock;
}
