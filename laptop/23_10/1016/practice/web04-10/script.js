// class Nightmarket{
//     constructor(img, title, info, content){
//         this.img = img;
//         this.title = title;
//         this.info = info;
//         this.content = content;
//     }
// }

// const mr1 = new Nightmarket(
//     "images/pic_01.jpg",
//     "一中商圈",
//     "位在台中第一中學附近的商圈，滿滿的美食也吸引外地遊客慕名而來。"
// );

// const mr2 = new Nightmarket(
//     "images/pic_02.jpg",
//     "逢甲夜市",
//     "逢甲夜市鄰近逢甲大學，蘊含著許多人潮排隊美食。"
// );

// const mr3 = new Nightmarket(
//     "images/pic_03.jpg",
//     "旱溪夜市",
//     "比起逢甲夜市與一中商圈聲勢也是越來越浩大"
// );

const img = ["pic_01.jpg", "pic_02.jpg", "pic_03.jpg"],
    title = ["一中商圈", "逢甲夜市", "旱溪夜市"],
    info = ["位在台中第一中學附近的商圈，滿滿的美食也吸引外地遊客慕名而來。",
        "逢甲夜市鄰近逢甲大學，蘊含著許多人潮排隊美食。",
        "比起逢甲夜市與一中商圈聲勢也是越來越浩大"];

let index = 0;

function page_1() {
    // div_page = document.getElementById("div_page");
    div_page.innerHTML =
        `<div class="div-all">
        <a href="#">
            <div class="div-img">
                <img src="images/${img[index]}">
            </div>
            <div class="div-cont">
                <h4>${title[index]}</h4>
                <p>${info[index]}</p>
            </div>
        </a>
    </div>`;

}

function next_page() {
    if (index > 0) {
        index -= 1;
    }
    else {
        index = 2;
    }
    page_1();
}
function pre_page() {
    if (index < 2) {
        index += 1;
    }
    else {
        index = 0;
    }
    page_1();
}


window.onload = function () {

    pre.addEventListener("click", pre_page);
    next.addEventListener("click", next_page);

    let div_int = setInterval(next_page, 500);
    container.addEventListener("mouseover", () => clearInterval(div_int));
    container.addEventListener("mouseout", () => div_int = setInterval(next_page, 500));

    page_1();
}



// function next() {
//     if(index<2){
//         index+=1;
//     }
//     else{
//         index = 0;
//     }
//     page_1();
// }

// function pre() {
//     if(index>0){
//         index-=1;
//     }
//     else{
//         index=2;
//     }
//     page_1();
// }
