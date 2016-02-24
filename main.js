 // The program should append each number 
 //(or its "fizz"/"buzz"/"fizzbuzz" substitution) 
 //to the body element of the DOM (On the page).


function fizzBuzz(num){
    for(var i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            return "fizzbuzz";
        }
        else if (i % 5 === 0 ){
            return "buzz";
        }

        else if (i % 3 === 0){
            return "fizz";
        }

        else{
            return i;
        }
    }
}

fizzBuzz(15);

// order matters

// Question - Does the JS and jquery need to be in the same file?


// jquery
$( document ).ready(function() {

    $('body').append(fizzBuzz(15));
});
