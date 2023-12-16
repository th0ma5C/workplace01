const fs = require('fs');

fs.mkdir('./新資料夾', err => {
    if (err) {
        console.log('創建失敗');
        return;
    }
    console.log('創建成功');
})

for (let i = 1; i < 11; i++) {
    let fileName = `${i}.js`;
    let fileContent = `console.log('${i}');`

    fs.writeFileSync(`./新資料夾/${fileName}`, fileContent)

    console.log(`${fileName}建立完畢`);

}