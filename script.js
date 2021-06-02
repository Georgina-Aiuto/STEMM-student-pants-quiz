
var buttonSubmit = document.getElementById("submit");
var c=0; 
var j=0;
var t=0;

//button command
buttonSubmit.onclick = function() {
    console.log("it works!");

    var inputs = document.getElementById("quizAnswers").elements;
    for (i=0;i < inputs.length;i++){
     
        if (inputs[i].type==="radio"&&inputs[i].checked){
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
};

