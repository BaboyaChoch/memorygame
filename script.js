let blocks = document.getElementsByClassName("square") //array of square divs, blocks on the board.
let levelTracker = document.getElementById("levelTracker"); //level counter
let defaultBlockColor = '#59ceec';



function flipAnimation(square) {
    anime({
        targets: square,
        scale: [{value: 1}, {value: 1.2}, {value: 1, delay: 200}],
        rotateY: {value: '180', delay: 150},
        backgroundColor: [
            {value: '#ffcc66'},
            {value: '#ff6600'}
          ],
        easing: 'easeInOutSine',
        duration: 400
      });   
}

//have a seperate anime for when the user answers
//have the backgroundColor transition like the above
//make the middle value green if its correct
//make the middle value red if its wrong

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
            let square = document.getElementById(`[${Math.ceil(Math.random()*4-1)},${Math.ceil(Math.random()*4-1)}]`);
          
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
            flipAnimation(gamePattern[index]);
            index++;
        }
        else{
            clearInterval(revealPattern);

            for(let  i = 0; i < level; i++)
            {
                gamePattern[i].style.background = 'red';
                console.log(gamePattern[i].style.background)
                console.log(gamePattern[i])
            }

            //gamePattern.forEach((block) => { block.style.background = 'red';});
            
        }
            
       
    }
    , 600)

  


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
    let game_level = 5; //current level of the game ***note: the level is also the number of squares to be flipped"
    let run = true;

    play(game_level);


} 


game();

