/*
BMI值計算公式:    BMI = 體重(公斤) / 身高2(公尺2)
*/

var BMI, weight, height;


function BMI_calculator() {
    weight = Number (prompt("請輸入體重:"));
    height = Number (prompt("請輸入身高(單位:公尺):"));
    BMI = (weight / (height * height)).toFixed(2);
    document.write("體重:"+weight+"kg,身高:"+height+"m,<br>"+"你的BMI是:" + BMI);
}


BMI_calculator();
