const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'test.json');
const nFilePath = path.resolve(__dirname, 'nTest.json');

// 读取JSON文件
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // 将读取的JSON字符串解析为JavaScript对象
    let jsonData = JSON.parse(data);

    //修改数据
    let nData = jsonData.reduce((acc, item) => {
        if (!acc[item.label]) {
            acc[item.label] = [];
        }
        // Push the item into the correct category array
        acc[item.label].push({
            date: item.date,
            title: item.title,
            content: item.content
        });
        return acc;
    }, {})


    const updatedData = JSON.stringify(nData, null, 2);

    // 将修改后的JSON写回文件
    fs.writeFile(nFilePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('JSON文件已更新');
    });
});
