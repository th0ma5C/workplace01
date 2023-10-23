let n = Number (document.getElementById("plus").value),
        sum = 0,
        result_1 = document.getElementById("result_1");

    for(let num=1;num<=n;num++){
        sum+=num;
    }

    alert("1到"+n+"的和為:"+sum);

    let msg = `<p>1到${n}的和為:${sum}</p>`;
    result_1.innerHTML = msg;