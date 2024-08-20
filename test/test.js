const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'test.json');
const nFilePath = path.resolve(__dirname, 'nTest.json');

function getRandomDateInPastYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    // 生成一个从去年同一天开始到今天的随机时间戳
    const start = new Date(currentYear - 1, currentMonth, currentDay);
    const end = currentDate;
    const randomTimeStamp = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    // 获取随机日期的年、月、日并格式化
    const year = randomTimeStamp.getFullYear();
    const month = String(randomTimeStamp.getMonth() + 1).padStart(2, '0');
    const day = String(randomTimeStamp.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
}

function getRandomInteger(min, max) {
    // 确保min和max是整数
    min = Math.ceil(min);
    max = Math.floor(max);

    // 生成min（包含）到max（包含）之间的随机整数
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


fs.readFile(filePath, 'utf8', (err, rawData) => {
    if (err) console.log(err);

    let data = JSON.parse(rawData);
    // for (let i of data) {
    //     i.items.forEach((el) => {
    //         el.rating = Number(getRandomInteger(2, 5));
    //         el.date = getRandomDateInPastYear();
    //     })
    //     console.log(i);
    // }

    data.forEach((item) => {
        item.date = getRandomDateInPastYear();
        item.rating = Number(getRandomInteger(2, 5));
    })

    fs.writeFile(nFilePath, JSON.stringify(data, null, 2), err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been written');
    });
})
