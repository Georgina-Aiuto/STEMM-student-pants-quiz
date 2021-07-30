
var buttonSubmit = document.getElementById("submit");
var c=0; 
var j=0;
var t=0;

//disabled button 
document.body.addEventListener('change', function(){
    var radiobuttons = document.querySelectorAll('input[type=radio]:checked')
    console.log(radiobuttons.length)
    if(radiobuttons.length==12){
        buttonSubmit.disabled = false;
    }
});
  
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
        document.getElementById("quiz").hidden=true;
        document.getElementById("chinos").removeAttribute("hidden");
        document.getElementById("results").removeAttribute("hidden");
       
    }
    else if (j>c && j>t){
        document.getElementById("quiz").hidden=true;
        document.getElementById("jeans").removeAttribute("hidden");
        document.getElementById("results").removeAttribute("hidden");
    }
    else if (t>c && t>j){
        document.getElementById("quiz").hidden=true;
        document.getElementById("tracksuits").removeAttribute("hidden");
        document.getElementById("results").removeAttribute("hidden");
    }
    else {
        document.getElementById("quiz").hidden=true;
        document.getElementById("multiple").removeAttribute("hidden");
        document.getElementById("results").removeAttribute("hidden");
    }

    window.scrollTo(0,0);

    //detailed results
    document.getElementById("j-results").innerHTML = j;
    document.getElementById("c-results").innerHTML = c;
    document.getElementById("t-results").innerHTML = t;
};


//hide div/results when button is clicked and shows the results. 
//class called "visisable"