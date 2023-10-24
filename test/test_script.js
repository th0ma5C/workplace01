$("#tabs li a").click( (event) =>{
    console.log($("#tabs li a"));
    var index = $("#tabs li a").index(this);
    console.log(index);
})
