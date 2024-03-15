module.exports = function (success, error) {
    if (typeof error !== 'function') {
        error = () => {
            console.log('連接失敗');
        }
    }

    const mongoose = require('mongoose');

    const { DBHOST, DBPORT, DBNAME } = require('../config/config');

    mongoose.set('strictQuery', true);
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    mongoose.connection.once('open', () => {
        console.log('連接成功');
        success();
    });
    mongoose.connection.on('error', () => {
        error();
    });
    mongoose.connection.once('close', () => {
        console.log('連接關閉');
    });
}