var x = 0

$(document).ready(function(){
    $("button#plus1").on("mousedown", function(){
        x = x + 1
        $("div#output").text(x)
    });
}); 

$(document).ready(function(){
    $("button#minus1").on("mousedown", function(){
        if(x>0){
            x = x - 1
        }else{
            alert("Current x should be greater equal than 0")
        }
        $("div#output").text(x)
    });
}); 

$(document).ready(function(){
    $("button#reset1").on("mousedown", function(){
        if(x!=0){
            x = 0
        }else{
            alert("Current x is already been 0!")
        }
        $("div#output").text(x)
    });
}); 