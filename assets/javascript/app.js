//alert("JS is Linked");

//============================== Global Variables =========================//

var correct = 1
var incorrect = 0

//create a countdown timer

var count = 60
var counter = setInterval(timer, 1000);

function timer() {
    
    count = count - 1;
    $("#timer").html(":" + count);
    if (count === 0) {
        //  alert("from Counter function");
        $("#timer").hide();
        hidegame();


    }
}

//=============================== Check for score =========================//


//=============================== Global Functions ========================//
function hidegame() {
    $("#game-content").hide();
}
// hidegame();

//start game function
function startGame() {
    //alert("From startGame function");
    $("#game-content").show();
    $("#start-button").hide();
    // 
    timer();

};

//==== end game function ====//
function endGame() {
    // hide game area
    hidegame();
    // check for correct answers
    // add up score
    // display score and message
};

//=== buttons ====//
$("#start-button").click(startGame);
$("#submit").click(endGame);

