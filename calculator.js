$(document).ready(function(){
    // This is the first part for Say Hello
    $("button#sayHello").on("mousedown", function(){
        var name = $("input#name1").val()
        if(name == "Enter your name!"){
            alert("Please enter your name before start")
        }else{
            alert("Hello " + name + "!")
            $("div#output1").text("Hello " + name + " !")
        }
    });

    // These 4 is for the hang over function of the button
    $("button#add1").on("mouseenter", function(){
        $("span#method").text(" + ")
    });

    $("button#minus1").on("mouseenter", function(){
        $("span#method").text(" - ")
    });

    $("button#multiply1").on("mouseenter", function(){
        $("span#method").text(" * ")
    });

    $("button#devide1").on("mouseenter", function(){
        $("span#method").text(" / ")
    });

    // These 4 function is for doing the calculation
    $("button#add1").on("mousedown", function(){
        let number1 = Number($("input#number1").val())
        let number2 = Number($("input#number2").val())
        let sum = number1 + number2
        if(isNaN(sum)){
            alert("Please enter the valid type of numbers")
            $("div#output2").text(0)
        }else{
            $("div#output2").text(sum)
        }
    });

    $("button#minus1").on("mousedown", function(){
        let number1 = Number($("input#number1").val())
        let number2 = Number($("input#number2").val())
        let sum = number1 - number2
        if(isNaN(sum)){
            alert("Please enter the valid type of numbers")
            $("div#output2").text(0)
        }else{
            $("div#output2").text(sum)
        }
    });

    $("button#multiply1").on("mousedown", function(){
        let number1 = Number($("input#number1").val())
        let number2 = Number($("input#number2").val())
        let sum = number1 * number2
        if(isNaN(sum)){
            alert("Please enter the valid type of numbers")
            $("div#output2").text(0)
        }else{
            $("div#output2").text(sum)
        }
    });

    $("button#devide1").on("mousedown", function(){
        let number1 = Number($("input#number1").val())
        let number2 = Number($("input#number2").val())
        let sum = number1 + number2
        if(isNaN(sum)){
            alert("Please enter the valid type of numbers")
            $("div#output2").text(0)
        }else{
            if(number2 == 0){
                alert("The second number cannot be 0!")
                $("div#output2").text(0)
            }else{
                let division = number1 / number2
                $("div#output2").text(division)
            }
            
        }
    });

    $("button#reset1").on("mousedown", function(){
        $("input#number1").val("Enter number 1")
        $("input#number2").val("Enter number 2")
        $("span#method").text(" + ")
        $("div#output2").text(0)
    });
});
