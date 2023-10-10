/*
BMI = 體重(公斤) / 身高2(公尺2)
*/
function bmi_cal() {
    var wt, ht, bmi, bmi_level, bmi_color, bmi_result;

    wt = Number(document.getElementById("weight").value);
    ht = Number(document.getElementById("height").value);
    bmi_result = document.getElementById("bmi_result");

    bmi = (wt / (Math.pow((ht / 100), 2))).toFixed(2);

    if (bmi < 18.5) {
        bmi_level = "過輕";
        bmi_color = "blue"
    }
    else if (bmi < 24) {
        bmi_level = "正常";
        bmi_color = "black";
    }
    else {
        bmi_level = "過重";
        bmi_color = "red";
    }

    msg1 = `
    體重：${wt}公斤
    身高：${ht}公分
    BMI：${bmi}
    結果：${bmi_level}
    `;
    alert(msg1);

    msg2 = `<p>體重：${wt}公斤</p>
            <p>身高：${ht}公分</p>
            <p>BMI：${bmi}</p>
            <p style="color: ;">結果：${bmi_level}</p>`;
    bmi_result.innerHTML = msg2;
}