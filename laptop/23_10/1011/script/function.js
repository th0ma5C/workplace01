/*// 練習一
function fn(){

var cla, sco, result, msg, color;

cla = document.getElementById("class").value.toLowerCase();
sco = Number (document.getElementById("score").value);
result = document.getElementById("result");

if((cla == "a" && sco >=60)||(cla == "b" && sco >=40)){
    msg = "成績合格";
    color = "blue";
}
else{
    msg = "成績不合格";
    color = "red";
}

result.innerHTML = `<p style="color: ${color}">${msg}</p>`
}*/

/*// 練習二
window.onload = function() {

    let fm = document.getElementById("fm");
    fm.innerHTML = 
    `<form action="">
        <div>
            <label for="class">班級(A or B)：</label>
            <input type="text" name="class" id="class">
        </div>
        <div>
            <label for="score">成績：</label>
            <input type="text" name="score" id="score">
        </div>
    </form>`;
};

function fn() {

    var cla, sco, result, msg, color;

    cla = document.getElementById("class").value.toLowerCase();
    sco = Number(document.getElementById("score").value);
    result = document.getElementById("result");

    if ((cla == "a") && (sco > 90 || sco < 20)) {
        msg = "請注意";
        color = "red";
    }
    else {
        msg = "沒問題";
        color = "black";
    }

    result.innerHTML = `<p style="color: ${color}">${msg}</p>`
};*/

// 練習三
function fn_plus(){
    let n = Number (document.getElementById("plus").value),
        sum = 0,
        result_1 = document.getElementById("result_1");

    for(let num=1;num<=n;num++){
        sum+=num;
    }

    alert("1到"+n+"的和為:"+sum);

    let msg = `<p>1到${n}的和為:${sum}</p>`;
    result_1.innerHTML = msg;
}
console.log("1");
console.log("2");
/*// 練習四
function fn_mult(){
    let n = Number (document.getElementById("mult").value),
        sum = 1,
        result_2 = document.getElementById("result_2");

    for(let num=1;num<=n;num++){
        sum*=num;
    };

    alert("1乘到"+n+"的和為:"+sum);

    let msg = `<p>1乘到${n}的和為:${sum}</p>`;
    result_2.innerHTML = msg;
}*/

// 練習五
function fn_mult(){
    let n = Number (document.getElementById("mult").value),
        sum = 1,
        result_2 = document.getElementById("result_2");


    let num = 1;
    while(num<=n){
        sum*=num;
        num++;
        console.log("num:"+num+"sum:"+sum);
    }

    // do{
    //     console.log("num:"+num+"sum:"+sum);
    //     sum*=num;
    //     num++;
    // }while(num<=n);

    alert("1乘到"+n+"的和為:"+sum);

    let msg = `<p>1乘到${n}的和為:${sum}</p>`;
    result_2.innerHTML = msg;
}


// 練習六
