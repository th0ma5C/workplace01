const img_src = ["img_00", "img_01", "img_02"];

let index = 0;
function img() {
    $("#imgCon").html(
        `
            <img src="img/${img_src[index]}.jpeg" alt="一張圖片" />
        `
    );

}

function pre() {
    if (index > 0) {
        index -= 1;
    }
    else {
        index = 2;
    }
    img();
}
function next() {
    if (index == 2) {
        index = 0;
    }
    else {
        index += 1;
    }
    img();
}

$(function () {
    $("#btnPre").click(pre);
    $("#btnNext").click(next);

    let timer = setInterval(next, 500);
    $("#con").mouseover(() => {clearInterval(timer)});
    $("#con").mouseout(() => {
        timer = setInterval(next, 500);
    })

    img();
});
