//starting quiz button

var buttonQuiz = document.getElementById("startQuiz");
var hover = document.getElementsByClassName("button");
var buttonHome = document.getElementById("homePage");
var buttonSubmit = document.getElementById("submit");

//button command
buttonQuiz.onclick = function() {
    location.href="quiz.html";  
};

buttonHome.onclick = function() {
    location.href="index.html";  
};

//calculator 



buttonHome.onclick = function() {
    if (jeans > chinos, jeans > tracksuits){
        location.href="jeans-results.html";
    }
    else if (chinos > jeans, chinos > tracksuits){
        location.href="chinos-results.html";
    }
    else if (tracksuits > jeans, tracksuits > chinos){
        location.href="tracksuits-results.html";
    }
    else 
        location.href="allrounder-results.html";
};


//hover state
hover.focus();
