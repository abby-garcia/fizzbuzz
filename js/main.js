// jquery
$( document ).ready(function() {

    $('body').append(fizzBuzz(15));
});


function fizzBuzz(num){
    var html ="";
    for(var i = 1; i <= num; i++){
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






