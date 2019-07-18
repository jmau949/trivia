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



$(document).ready(function() {
var options = [
    {
        question: "What is the name of the large red ball used in Quidditch?",
        choice: ["Quiddle", "Snitch", "Sniffle", "Quaffle"],
        answer: 3,
        photo: "assets/images/quaffle.jpg",
    },
    {
        question: "What is the name of the goblin who assists Harry, Ron, and Hermione in infiltrating Gringotts?",
        choice: ["Gornuk", "Golgomath", "Griphook", "Gregorovitch"],
        answer: 2,
        photo: "assets/images/griphook.jpg",
    },
    {
        question: "Which of the following dragons was NOT used in the Triwizard Tournament in 1994?",
        choice: ["Hungarian Horntail", "Swedish Short-Snout", "Norwegian Ridgeback", "Chinese Fireball"],
        answer: 3,
        photo: "assets/images/ridgeback.png",
    },
    {
        question: "What is the name of the Weasley family's elderly owl?",
        choice: ["Elphias", "Errol", "Ernie", "Eldred"],
        answer: 1,
        photo: "assets/images/errol.png",
    },
    {
        question: "Which of the Weasleys went to Romania to study dragons?",
        choice: ["George", "Bill", "Charlie", "Percy"],
        answer: 2,
        photo: "assets/images/charlie.png",

    },
    {
        question: "Which is the house ghost of Hufflepuff?",
        choice: ["The Fat Friar", "The Grey Lady", "The Bloody Baron", "Nearly Headless Nick"],
        answer: 0,
        photo: "assets/images/friar.jpg",
    },
    {
        question: "Who was NOT a member of the 'Slug Club'?",
        choice: ["Cormac Mclaggen", "Hermione Granger", "Ron Weasley", "Harry Potter"],
        answer: 2,
        photo: "assets/images/ronald.png",
    },
    {
        question: "What kind of creature does Lee Jordan put in Professor Umbridge's office during the latter's reign as Hogwarts High Inquisitor?",
        choice: ["Norwegian Ridgeback", "Niffler", "Nargle", "Nymph"],
        answer: 1,
        photo: "assets/images/niffler.png",
    },
    {
        question: "What profession are Hermione Granger's Muggle parents?",
        choice: ["Chefs", "Dentists", "Opticians", "Artists"],
        answer: 2,
        photo: "assets/images/parents.jpg",
    },
    {
        question: "In which Quidditch position did Oliver Wood play when he was still at Hogwarts?",
        choice: ["Chaser", "Beater", "Keeper", "Seeker"],
        answer: 3,
        photo: "assets/images/oliver.jpg",
    },
]

var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var timer = 20;
var intervalId;
var running = false;
var pick;

$('.timer').hide()

//click start button to start game
$(".start").on("click", function () {
        $(".start").hide();
        $('.timer').show()
		runTimer();
})
	
//timer start
function runTimer(){
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
	}
}
//timer countdown
function decrement() {
	$(".timer").html("<h3>Time remaining: " + timer + "</h3>");
	timer --;

	//stop timer if reach -1
	if (timer === -1) {
		unanswerCount++;
		stop();
	}	
}
//timer stop
function stop() {
	running = false;
	clearInterval(intervalId);
}

function displayQuestion(){
    index= Math.floor(Math.random()*options.length+1);
    pick = options[index];
    console.log(pick)
    $(".question").html("<h2>" + pick.question + "</h2>");
    $(".answer1").html(pick.choice[0]);
    $(".answer2").html(pick.choice[1]);
    $(".answer3").html(pick.choice[2]);
    $(".answer4").html(pick.choice[3]);
}

displayQuestion() 
console.log(index)

});
