let game_pattern = [];  // an array of random cordinates([r,c]) to by memorized, maxsize:4*4, order matters
// let user_answer = [];   // an array of the cordinates of squares choosen by the user, maxsize:4*4, order matters
    //might not have to store ans
    // just andvance  game_pattern if they are right, exit if they are wrong

let game_level = 0;     // the current level of the game,leve dicatates the amount of squares to be choosen so max level is 16
let run = false;

function start()
{
    //button to start game
        //if clicked call {game()}
}


function end()
{
    //display score and sry game over message
    //button to reset to start screen
        
}

function play(level)
{
    //based on the level choose {level} number of coordinates and store it in {game_pattern}

    // flip all squares from {game_pattern} to color: black? 
        // pause, then flip them all back to default color: blue

    //ask for the user to input their answer
        //while they answer check to see if they mess up at every step {if id of square they click == game_pattern[i]}
            //if they mess up
                //end()
            //else continue game
}

function game()
{
    while(run)
    {
        play(level);
    }

}



updateboard = function () {

    for(let r = 0; r<4; r++){
        for(let c = 0; c<4; c++){
            document.getElementById(`[${r},${c}]`).style.backgroundColor = 'black';
    }
}

}

function main()
{
   
}

