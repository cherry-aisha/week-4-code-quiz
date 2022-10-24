// Quiz Components
var startQuiz = document.getElementById("startQuiz")
var saveScore = document.getElementById("saveScore")
var viewScores = document.getElementById("viewScores")
var playAgain = document.getElementById("playAgain")

var welcome = document.getElementById("welcome")
var quiz = document.getElementById("quiz")
var result = document.getElementById("result")

var options = document.getElementById("options")
var message = document.getElementById("message")

var timer = document.getElementById("timer")

var summary = document.getElementById("summary")

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

// Score Log
function onSaveScore(e) {
    var intials = document.getElementByID("initials").value

    //Validate the entry
    if (initials !== "") {
        localStorage.setItem(initials, score);
    }
}

//To view the score
function onViewScores(e) {
    window.location.href = 'scores.html';
}
function displayQuestion () {
    //Gets next question
    currentQuestion++;
    console.log("current question is " + currentQuestion);

    //Check if questions have ran out
    if(currentQuestion >= questions.length) {
        stopGame();
        return;
    }

    // Use questions from qurstions Array
    var question = questions [currentQuestion];
    document.getElementById("question").textContent = question.title

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

//Selecting the Answer
function onSelectAnswer(e) {
    var correctAnswer = questions[currenntQuestion].answer;
    var userAnswer = e.target.textContent;
    
    if (correctAnswer === userAnswer) {
        score++;

        displayMessage ('Correct!')
    } else {
        score --;

        displayMeesage ('Incorrect')
    }

    //Bring up the next question
    displayQuestion();
}

// Display message
function displayMessage(msg) {

    message.textContent = msg;

    // Clear message
    setTimeout(function () {
        message.textContent = " ";
    }, 1000);
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

welcome.style.display = 'none';
result.style.display = 'none';
quiz.style.display = 'flex';

displayQuestion();

}

// Starts game via button click
startQuiz.addEventListener("click", onStartGame);
savesScore.addEventListener("click", onSaveScore);
viewScores.addEventListener("click", onViewScores);
playAgain.addEventListener("click", onStartGame);