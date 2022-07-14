// w3schools to check the usage of on()
$(document).ready(function(){
    $("button#click").on("mousedown", function(){
        $("button#click").text("mousedown")
        $("button#click").css("background", "red")
    });
});

$(document).ready(function(){
    $("button#click").on("mouseup", function(){
        $("button#click").text("mouseup")
        $("button#click").css("background", "green")
    });
});

$(document).ready(function(){
    $("button#click").on("mouseenter", function(){
        $("button#click").text("mouseenter")
        $("button#click").css("background", "aqua")
    });
});

$(document).ready(function(){
    $("button#click").on("mouseleave", function(){
        $("button#click").text("mouseleave")
        $("button#click").css("background", "yellow")
    });
});