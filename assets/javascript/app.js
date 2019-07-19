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



$(document).ready(function () {
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
            photo: "assets/images/errol.jpg",
        },
        {
            question: "Which of the Weasleys went to Romania to study dragons?",
            choice: ["George", "Bill", "Charlie", "Percy"],
            answer: 2,
            photo: "assets/images/charlie.jpg",

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
            photo: "assets/images/niffler.jpg",
        },
        {
            question: "What profession are Hermione Granger's Muggle parents?",
            choice: ["Chefs", "Dentists", "Opticians", "Artists"],
            answer: 1,
            photo: "assets/images/parents.jpg",
        },
        {
            question: "In which Quidditch position did Oliver Wood play when he was still at Hogwarts?",
            choice: ["Chaser", "Beater", "Keeper", "Seeker"],
            answer: 2,
            photo: "assets/images/oliver.jpg",
        },
    ]

    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 20;
    var intervalId;
    var userGuess = "";
    var running = false;
    var allCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];



    $(".reset").hide();
    $(".start").on("click", function () {
        $(".start").hide();
        displayQuestion();
        runTimer();
        for (var i = 0; i < options.length; i++) {
            holder.push(options[i]);
        }
    })
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    function decrement() {
        $(".timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;
        if (timer === 0) {
            unanswerCount++;
            stop();
            $(".answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    }
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    function displayQuestion() {
        index = Math.floor(Math.random() * options.length);
        pick = options[index];
        $(".questionblock").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            userChoice.attr("data-guessvalue", i);
            $(".answerblock").append(userChoice);
        }
        $(".answerchoice").on("click", function () {
            userGuess = parseInt($(this).attr("data-guessvalue"));
            if (userGuess === pick.answer) {
                stop();
                correctCount++;
                userGuess = "";
                $(".answerblock").html("<p>Correct!</p>");
                hidepicture();
            } else {
                stop();
                wrongCount++;
                userGuess = "";
                $(".answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
                hidepicture();
            }
        })
    }

    function hidepicture() {
        $(".answerblock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        setTimeout(function () {
            $(".answerblock").empty();
            timer = 20;
            if ((wrongCount + correctCount + unanswerCount) === allCount) {
                $(".questionblock").empty();
                $(".questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
                $(".answerblock").append("<h4> Correct: " + correctCount + "</h4>");
                $(".answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>");
                $(".answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>");
                $(".reset").show();
                correctCount = 0;
                wrongCount = 0;
                unanswerCount = 0;
            } else {
                runTimer();
                displayQuestion();
            }
        }, 2000);
    }

    $(".reset").on("click", function () {
        $(".reset").hide();
        $(".answerblock").empty();
        $(".questionblock").empty();
        for (var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();

    })

})