var level=0,trigger=false;
var buttonColors = ["red" , "blue" , "green", "yellow"];
var gamePattern =[] , userClickedPattern = [];
var randomNumber=0,randomChosenColor="";
$(document).keypress(function(){
    if(!trigger){
    $("h1").text("Level "+level);
    nextSequence();
    trigger=true;
    }
})


function nextSequence(){
    userClickedPattern=[]
    level++;
    $("h1").text("Level "+level);
    
    randomNumber = (Math.random()*4);
    randomNumber= Math.floor(randomNumber);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length -1);
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){

        console.log("Correct");

        if(userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            }, 1000)
        }
    }
    else{
        $("body").addClass("game-over");
        playSound("wrong");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
    }
}


function startOver(){
    level=0, gamePattern = [] , trigger=false;
}
// nextSequence();
// console.log(randomChosenColor);



function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed"); 
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },70);
}
    



























// switch (userChosenColor) {
//     case "red":
//         $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
//         var red = new Audio("sounds/red.mp3");
//         red.play();
//         break;
//     case "blue":
//         $(userChosenColor).fadeOut(100).fadeIn(100);
//         var blue = new Audio("sounds/blue.mp3");
//         blue.play();
//         break;
//     case "green":
//         $(userChosenColor).fadeOut(100).fadeIn(100);
//         var green = new Audio("sounds/green.mp3");
//         green.play();
//         break;
//     case "yellow":
//         $(userChosenColor).fadeOut(100).fadeIn(100);
//         var yellow = new Audio("sounds/yellow.mp3");
//         yellow.play();
//         break;    
//     default:
//         console.log("By mistake");
//         break;
// }