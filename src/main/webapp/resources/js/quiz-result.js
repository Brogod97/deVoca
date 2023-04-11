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

// -------------------------------오답목록-------------------------------

function selectWordAllAjax(memberNo, categoryNo) {
    $.ajax({
        url: "selectWordAll",
        data: {
            memberNo: memberNo,
            categoryNo: categoryNo,
        },
        type: "POST",
        success: function (result) {
            const wordList = JSON.parse(result);

            sharedVocaListArea.innerHTML = ""; // 단어 리스트 부모 초기화

            createWordList(sharedVocaListArea, wordList);

            // 생성된 wordList를 순회하며, content-main-text 클릭 시 modal 클래스에 hidden 삭제

            // 생성된 단어 1줄 전체
            const wordListAll = document.querySelectorAll(".content-main-text");

            clickOneForEach(wordListAll, function () {
                // 특정 단어 클릭 시 modal 활성화
                /** 단어 조회 모달 */
                const modal = document.getElementById("modal");
                modal.style.display = "flex";

                // 단어가 눌렸을 때 해당 단어와 관련된 MEMBER_NO, CATEGORY_NO, WORD_NO를 비교해 일치하는 단어 하나 조회
                const wordNo = this.firstChild.children[2].innerText.trim();
                selectWordOneAjax(memberNo, categoryNo, wordNo);
            });
        },
        error: function () {
            console.log("selectWordAll 실패");
        },
    });
}
