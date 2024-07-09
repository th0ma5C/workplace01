import fs from 'fs';
import path from 'path';

interface Item {
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    category: string;
    imageURL?: string;
}

interface FormattedData {
    name: string;
    items: Item[];
}

let filePath = path.resolve(__dirname, 'test.json');
let nFilePath = path.resolve(__dirname, 'nTest.json');

fs.readFile(filePath, 'utf8', (err, rawData) => {
    if (err) {
        console.error(err);
        return;
    }

    const data: Item[] = JSON.parse(rawData);

    const formattedData: FormattedData[] = [
        {
            name: '沙拉',
            items: []
        },
        {
            name: '果昔',
            items: []
        }
    ];

    data.forEach(item => {
        if (item.category === '沙拉') {
            formattedData[0].items.push(item);
        } else if (item.category === '果昔') {
            formattedData[1].items.push(item);
        }
    });

    // console.log(JSON.stringify(formattedData, null, 2));

    fs.writeFile(nFilePath, JSON.stringify(formattedData, null, 2), err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been written');
    });
});
