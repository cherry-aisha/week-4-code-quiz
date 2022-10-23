// Quiz Components
var welcome = document.getElementById("welcome")
var timer = document.getElementById("timer")
var startQuiz = document.getElementById("startQuiz")
var quiz = document.getElementById("quiz")
var options = document.getElementById("options")
var message = document.getElementById("message")
var result = document.getElementById("result")
var saveScore = document.getElementById("saveScore")
var viewScores = document.getElementById("viewScores")
var summary = document.getElementById("summary")
var playAgain = document.getElementById("playAgain")

// Set defult to 0
var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var countdownTimer;

function stopGame() {
    //Stop Timer
    clearInterval(countdownTimer);

    //Clear the Timer
    timer.textContent = ""

    //Hide questions and show result
    quiz.style.display = 'none';
    result.style.display = 'flex';

    //Display Score
    summary.textContent = "You Scored: " + score;
}

function displayQuestion () {
    //Gets next question
    currentQuestion++;
    console.log("current question is " + currentQuestion);

    //Check if questions have ran out
    if(currentQuestion >= questions.length) {
        stopGame ();
        return;
    }

    // Use questions from qurstions Array
    var question = questions [currentQuestion];
    document.getElementById("question".textContent = question.title)

    //Clear existing options
    options.innerHTML = "";

    // Loads choices through the questions array and bring up options
    for (var i = 0; i < question.choices.length; i++) {
        var option = document.createElement ("div");
        option.textContent = question.choices[i];
        option.onclick = onSelectAnswer;
        option.classList.add("option");
        options.appendChild(option);
    }
}

//Start Game
function onStartGame () {
    secondsLeft = 75;

    // Begin at Question 1
    currentQuestion = 0;

    // Reset the score
    score = 0;

    //Start the Timer
    countdownTimer = setInterval(function () {
        if (secondsLeft > 0) {
            timer.textContent = secondsLeft;
        } else {
            // Stop counter and end game
            stopGame();
        }
        secondsLeft --;

    }, 1000);

// Starts game via button click
startQuiz.addEventListener("click", onStartGame)
}