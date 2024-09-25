const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'test.json');
const nFilePath = path.resolve(__dirname, 'nTest.json');




fs.readFile(filePath, 'utf8', (err, rawData) => {
    if (err) console.log(err);

    let data = JSON.parse(rawData);

    data.forEach((cate) => {
        cate.items.forEach((item) => {
            item.tags.splice(4, 2)
        })
    })

    fs.writeFile(nFilePath, JSON.stringify(data, null, 2), err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been written');
    });
})
