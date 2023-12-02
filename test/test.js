function getDay(strings, ...values) {
    let result = '', week = ['日', '一', '二', '三', '四', '五', '六'];

    strings.forEach(function (key, i) {
        if (values[i]) {
            let setTime = new Date(values[i]);//日期物件
            result += values[i] + '是星期' + week[setTime.getDay()] + '\n';
        }
    })
    return result;
}

const a = '2019-8-1', b = '2019-9-1', c = '2019-10-1';

const sentence = getDay`${a},${b},${c}`;
console.log(sentence);
//2019-8-1是星期四
//2019-9-1是星期日
//2019-10-1是星期二