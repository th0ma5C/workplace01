/*
let imgArray = {
    length: 13,
    0: {
        id: 1,
        imgnum: 1,
    },
    1: {
        id: 2,
        imgnum: 2,
    },
    2: {
        id: 3,
        imgnum: 3,
    },
    3: {
        id: 4,
        imgnum: 4,
    },
    4: {
        id: 5,
        imgnum: 5,
    },
    5: {
        id: 6,
        imgnum: 6,
    },
    6: {
        id: 7,
        imgnum: 7,
    },
    7: {
        id: 8,
        imgnum: 8,
    },
    8: {
        id: 9,
        imgnum: 9,
    },
    9: {
        id: 10,
        imgnum: 10,
    },
    10: {
        id: 11,
        imgnum: 11,
    },
    11: {
        id: 12,
        imgnum: 12,
    },
    12: {
        id: 13,
        imgnum: 13,
    },

}
*/

for (let i = 1; i <= 13; i++) {
    $("#div-select").append(
        `<div id='div${i}'><img src='images/pic_${i}.jpg'></div>`
    )
}