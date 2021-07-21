
var buttonSubmit = document.getElementById("submit");
var c=0; 
var j=0;
var t=0;

//disabled button 

var inputElements = document.getElementByClassName("radiolabel");
for (var i = inputElements.length - 1; i>=0; --i){
    var element = inputElements[i];
    element.onchange = function () {
        document.getElementById("submit").removeAttribute("disabled");
    }
}
  
//checking if the radio buttons have been clicked
function radiobuttons (){
    if(document.getElementsByName('question-one').checked){
        q1 = true;
    }
}


//button command
buttonSubmit.onclick = function() {

    var inputs = document.getElementById("quizAnswers").elements;

    for (i = 0; i < inputs.length; i++) {
     
        if (inputs[i].type==="radio"&&inputs[i].checked) {
            console.log(inputs[i]);
            var cat =inputs[i].value[0];
            console.log(cat);
            var score = parseInt(inputs[i].value[1]);
            console.log(score);

            switch(cat){
                case "c":
                    c+=score;
                    console.log(c);
                    break;
                case "j":
                    j+=score;
                    console.log(j);
                    break;
                case "t":
                    t+=score;
                    console.log(t);
                    break;
            }
        }
    }
    console.log("c is: "+c);
    console.log("j is: "+j);
    console.log("t is: "+t);

    //display results
    if (c>j && c>t){
        //document.getElementById("quiz").innerHTML="Chinos";
        location.href="chinos.html";
    }
    else if (j>c && j>t){
        document.getElementById("quiz").innerHTML="Jeans";
    }
    else if (t>c && t>j){
        document.getElementById("quiz").innerHTML="Tracksuits";
    }
    else {
        document.getElementById("quiz").innerHTML="multiple";
    }

    //detailed results
    document.getElementById("j-results").innerHTML = j;
    document.getElementById("c-results").innerHTML = c;
    document.getElementById("t-results").innerHTML = t;
};


