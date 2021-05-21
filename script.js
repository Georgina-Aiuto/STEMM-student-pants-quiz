//starting quiz button

var button = document.getElementById("startQuiz");
var hover = document.getElementsByClassName("button");

//button command
button.onclick = function() {
    location.href="quiz.html";  
};

//hover state
hover.focus();