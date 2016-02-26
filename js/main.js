// jquery
$( document ).ready(function() {

    $('body').append(fizzBuzz(15));
});


//prompt section?

function fizzBuzz(answer){
    var answer = parseInt(prompt("Please Enter Number."));


    var html ="";
    for(var i = 1; i <= answer; i++){
        if(i % 3 === 0 && i % 5 === 0){
            html+= "<br>fizzbuzz";
        }
        else if (i % 5 === 0 ){
            html+= "<br>buzz";
        }

        else if (i % 3 === 0){
            html+= "<br>fizz";
        }

        else{
            html+= "<br>" + i;
        }
    }
    return html;

}






