let game_pattern = [];  // an array of random cordinates([r,c]) to by memorized, maxsize:4*4, order matters
// let user_answer = [];   // an array of the cordinates of squares choosen by the user, maxsize:4*4, order matters
    //might not have to store ans
    // just andvance  game_pattern if they are right, exit if they are wrong

let game_level = 0;     // the current level of the game,leve dicatates the amount of squares to be choosen so max level is 16
let run = false;
let blocks = document.getElementsByClassName("square")


flipBlock = function(block){
    block.onclick = function(){ 
        let curr = 'rgb(89, 206, 236)'; 
  
        if(this.style.background == curr)
            this.style.background = 'white';
        else
            this.style.background = curr;  
    }
}

flipBlock(blocks[0]);
flipBlock(blocks[1]);
flipBlock(blocks[2]);
flipBlock(blocks[3]);
flipBlock(blocks[4]);
flipBlock(blocks[5]);
flipBlock(blocks[6]);


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
    let current = 0;
    while(current < level)
    {
        random_pattern.push(`[${Math.ceil(Math.random()*5-1)},${Math.ceil(Math.random()*5-1)}]`);
        curr++;
    }
    // flip all squares from {game_pattern} to color: black? 
        // pause, then flip them all back to default color: blue

    current = 0;
    //listen for click events
    while(current < level )
    {
        if($(".square".click(function(){ return this.id})) === random_pattern[current]) 
            current++ 
        else
            end()
    }
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
        //play(level);
    }

}


function main()
{
   
}


