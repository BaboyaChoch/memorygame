let blocks = document.getElementsByClassName("square") //array of square divs, blocks on the board.
let levelTracker = document.getElementById("levelTracker"); //level counter
let defaultBlockColor = '#59ceec';


function flipAnimation(block) {

}

function start()
{
    //button to start game
        //if clicked call {game()}
}


function end()
{
    //display score and say game over message
    //button to reset to start screen
        
}

function play(level)
{
    let gamePattern = []; //an array of random squares to be memorized

    //based on the level choose {level} number of coordinates and store it in {game_pattern}
    let current = 0;

    choosePattern =  function() {
        if(current < level)
        {
            let square = `[${Math.ceil(Math.random()*4-1)},${Math.ceil(Math.random()*4-1)}]`;
          
            if(!gamePattern.includes(square)){ 

                gamePattern.push(square);
                current++;
                choosePattern();  

            }
            else{ 
                choosePattern();  
            }
               
        }
    }

    choosePattern();
  
    //reveal the pattern to be memorized
    let index = 0;

    revealPattern = setInterval( function() { 

        console.log(index);
        if(index < level)
        {           
            document.getElementById(gamePattern[index]).style.background = 'orange';
            flipAnimation(document.getElementById(gamePattern[index]));
            index++;
        }
        else
            clearInterval(revealPattern);
       
    }
    , 600)

    //reset the board to default;



    //listen for click events
    /*while(current < level )
    {
        if($(".square".click(function(){ return this.id})) === random_pattern[current]) 
            current++;
        else
            end();
    }*/

    //ask for the user to input their answer
        //while they answer check to see if they mess up at every step {if id of square they click == game_pattern[i]}
            //if they mess up
                //end()
            //else 
                //continue game
                //update level 

}

function game()
{
    let game_level = 10; //current level of the game ***note: the level is also the number of squares to be flipped"
    let run = true;

    play(game_level);


} 

game();

