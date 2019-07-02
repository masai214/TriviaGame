var number = 45;
var intervalId;
$(".timer-start").on("click", run);
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}

function decrement(){
    number--;

    $(".timer").html("<h2> Time Remaining : " + number + "</h2>");

    if (number === 0) {

        results();

    }
}