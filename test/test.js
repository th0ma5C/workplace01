const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'test.json');

// 读取JSON文件
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // 将读取的JSON字符串解析为JavaScript对象
    let jsonData = JSON.parse(data);

    //修改数据
    jsonData.forEach(el => {
        el.date = new Date(el.date);
    });
    const updatedData = JSON.stringify(jsonData, null, 2);

    // 将修改后的JSON写回文件
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('JSON文件已更新');
    });
});
