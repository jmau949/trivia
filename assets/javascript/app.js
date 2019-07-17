/*
pseudocode
click start to start timer and show first question
start timer and offer 4 divs with onclicks (highlighting hovered choice)
    if user selects correct. 
        show correct and image for 5 seconds. then go to next question
    if user selects wrong
        show "incorrect" and correct answer and image for 5 seconds. then go to next question
    if timer runs out => show correct answer and image for 5 seconds, then go next
after last question show results. and retry button
*/


var questions = [
    {
        question: "is sky blue?",
        choices: ["yes", "no", "maybe", "idk"],
        answer: "yes",
        seconds: 'no'
    }
]
var correct;
var incorrect;


$(document).ready(function() {
    console.log( "ready!" );

function initialize(){

}

function nextQuestion(){

}

function correctAnswer() {

}

});
