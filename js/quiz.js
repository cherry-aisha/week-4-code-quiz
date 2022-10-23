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