var jPrime = function(n) {
    var startTime = new Date().getTime();
    var numbers = [];
    var result = [];
    for (i=2;i<=n;i++) {
        numbers.push(i);
    }
    numbers.forEach(function(m) {
        var thisNumber = 0;
        for (i=(m-1);i>1;i--) {
            if (m % i === 0) {
                thisNumber = 1;
            }
        };
        if (thisNumber === 0) {
            result.push(m);
        }
    });
    // return(result);
    var endTime = new Date().getTime();
    console.log(endTime - startTime);
}

var sPrime = function(n) {
    var startTime = new Date().getTime();
    var allNumbers = [];

    for ( var i = 2; i <= n; i += 1 ) {
        allNumbers.push(i);
    };

    allNumbers.forEach(function(input) {
        for ( var prime = 2; prime < input; prime += 1 ) {
            if (Number.isInteger(input / prime) === true ) {
                var index = allNumbers.indexOf(input);
                allNumbers[index] = "A";
            };
        };
    });
    // alert(allNumbers);
    var endTime = new Date().getTime();
    console.log(endTime - startTime);
};


$(document).ready(function() {

    $("form").submit(function(event) {
        event.preventDefault();
        var userInput = $("#my_number").val();
        var result = jPrime(userInput);
        result.forEach(function(n) {
            $("#output").append("<li>" + n + "</li>");
        });
    })
})
