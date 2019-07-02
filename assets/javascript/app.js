var number = 10;
var intervalId;

$(".timer-start").on("click", run);
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}

function decrement() {
    number--;

    $(".timer").html("<h2> Time Remaining : " + number + "</h2>");

    if (number === 0) {

        clearInterval(intervalId);

        submitAnswers();

    }
}
$(".submit").on("click", submitAnswers);

function submitAnswers() {
    
    var score = 0;
    var unanswered = 0;
    var questions = 5;
    var ansArr = ["d", "b", "b", "c", "a"];
    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
    var q5 = document.forms["quiz"]["q5"].value;

    for ( var i = 1; i <=questions; i++ ){
        if(eval ("q"+ i) == ""){
            unanswered++;
            
            
        }
    }

    for ( var i = 1; i <=questions; i++ ){
        if(eval ("q"+ i) == ansArr[i - 1]){
            score++;
            
        }
    }

    $(".question").empty();
    $(".timer-start").empty();
    $(".timer").empty();
    $(".submit").empty();

    

    

    $( ".results" )
  .text("You got " + score +  " out of " + questions + " questions correct! " );
    


    


}
