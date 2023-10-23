// 練習七
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

let N =  (prompt("請輸入一個整數，計算1+到n的總和(小於1則結束)"));

while(N>0){
    let Sum = 0;
    for(let Num=1;Num<=N;Num++){
        Sum+=Num;
    }
    alert("和為:"+Sum);
    N =  (prompt("請輸入一個整數，計算1+到n的總和(小於1則結束)"));
}
alert("結束")

// 練習六
function fn_mult(){
    let n = Number (document.getElementById("mult").value),
        sum,
        result_2 = document.getElementById("result_2");

    // for(let num=1;num<=n;num++){
    //     sum*=num;
    // };

    let num = 1;
    // while(num<=n){
    //     sum*=num;
    //     num++;
    //     console.log("num:"+num+"sum:"+sum);
    // }

    do{
        sum = num*num;
        console.log(num+"的平方:"+sum);
        num++;
    }while(num<=n);


    // alert("1乘到"+n+"的和為:"+sum);

    // let msg = `<p>1乘到${n}的和為:${sum}</p>`;
    // result_2.innerHTML = msg;
}

// 練習

