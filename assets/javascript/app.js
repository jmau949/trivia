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
        question: "What is the name of the large red ball used in Quidditch?",
        choices: ["Quiddle", "Snitch", "Sniffle", "Quaffle"],
        answer: "Griphook"
    },
    {
        question: "What is the name of the goblin who assists Harry, Ron, and Hermione in infiltrating Gringotts?",
        choices: ["Gornuk", "Golgomath", "Griphook", "Gregorovitch"],
        answer: "Griphook"
    },
    {
        question: "Which of the following dragons was NOT used in the Triwizard Tournament in 1994?",
        choices: ["Hungarian Horntail", "Swedish Short-Snout", "Norwegian Ridgeback", "Chinese Fireball"],
        answer: "Norwegian Ridgeback"
    },
    {
        question: "What is the name of the Weasley family's elderly owl?",
        choices: ["Elphias", "Errol", "Ernie", "Eldred"],
        answer: "Errol"
    },
    {
        question: "Which of the Weasleys went to Romania to study dragons?",
        choices: ["George", "Bill", "Charlie", "Percy"],
        answer: "Charlie"
    },
    {
        question: "Which is the house ghost of Hufflepuff?",
        choices: ["The Fat Friar", "The Grey Lady", "The Bloody Baron", "Nearly Headless Nick"],
        answer: "The Fat Friar"
    },
    {
        question: "Who was NOT a member of the 'Slug Club'?",
        choices: ["Cormac Mclaggen", "Hermione Granger", "Ron Weasley", "Harry Potter"],
        answer: "Ron Weasley"
    },
    {
        question: "What kind of creature does Lee Jordan put in Professor Umbridge's office during the latter's reign as Hogwarts High Inquisitor?",
        choices: ["Norwegian Ridgeback", "Niffler", "Nargle", "Nymph"],
        answer: "Niffler"
    },
    {
        question: "What profession are Hermione Granger's Muggle parents?",
        choices: ["Chefs", "Dentists", "Opticians", "Artists"],
        answer: "Dentists"
    },
    {
        question: "In which Quidditch position did Oliver Wood play when he was still at Hogwarts?",
        choices: ["Chaser", "Beater", "Keeper", "Seeker"],
        answer: "Keeper"
    },
]



$(document).ready(function() {
    console.log( "ready!" );

function initialize(){
    $('.start').hide()
    $('.timer').hide()
    $('.question').html(questions.question[1])
}

initialize()

function nextQuestion(){

}

function correctAnswer() {

}

});
