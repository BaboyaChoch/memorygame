function flipAnimation(square) {
    anime({
        targets: square,
        scale: [{value: 1}, {value: 1.3}, {value: 1}],
        rotateY: {value: '180'},
        backgroundColor: [
            {value: '#ffcc66'},
            {value: '#ff6600'}
          ],
        easing: 'easeInOutSine',
        duration: 500
      });   
}


function resetBoardAnimation(square) {
    anime({
        targets: square,
        scale: [{value: 1}, {value: 1.3}, {value: 1, delay: 200}],
        rotateY: {value: '180', delay: 150},
        backgroundColor: [
            {value: '#66ffff'},
            {value: '#00ccff'}
          ],
        easing: 'easeInOutSine',
        duration: 500
      });   
}

function correctAnswerAnimation(square) {
    anime({
        targets: square,
        scale: [{value: 1}, {value: 1.2}, {value: 1, delay: 200}],
        rotateY: {value: '180', delay: 150},
        backgroundColor: [
            {value: '#00ff00'},
            {value: '#ff6600'}
          ],
        easing: 'easeInOutSine',
        duration: 100
      });   
}

function wrongAnswerAnimation(square) {
    anime({
        targets: square,
        scale: [{value: 1}, {value: 1.2}, {value: 1, delay: 200}],
        rotateY: {value: '180', delay: 150},
        backgroundColor: '#ff0000',
        easing: 'easeInOutSine',
        duration: 400
      });   
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

    setTimeout( () => gamePattern.forEach((block) => { block.style.background = '#00ccff';}), 500);

    let levelTracker = document.getElementById("levelTracker"); //level counter
    let blocks = document.getElementsByClassName("square") //array of square divs, blocks on the board.
    let gamePattern = []; //an array of random squares to be memorized
    
    levelTracker.innerHTML = `Level:${level}`;

    //based on the level choose a random {level} number of squares/blocks and store it in {game_pattern}
    let current = 0;
    choosePattern =  function() {
        if(current < level)
        {
            // change this so that it chooses a random index from 0 to 16 and use blocks[index]
            let square = blocks[Math.ceil(Math.random()*16-1)]
          
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
  
    //reveal the pattern to be memorized to the user
    let index = 0;

    revealPattern = setInterval( function() { 

        if(index < level)
        {           
            flipAnimation(gamePattern[index]);
            index++;
        }
        else{
            clearInterval(revealPattern);
            //reseting tod default board state
            gamePattern.forEach((block) => { resetBoardAnimation(block)});

        }      
       
    }
    , (500 + (level)**2))

    let currentIndex = 0;
    let checkAnswer = function() {
        let square = document.getElementById(this.getAttribute("id"));

        if(this.getAttribute("id") === gamePattern[currentIndex].getAttribute("id")){
            correctAnswerAnimation(square);
            currentIndex++;

            if(currentIndex === level){
                gamePattern.forEach((block) => { resetBoardAnimation(square)});
                setTimeout(play(level+1), 1000);
                
            }
                
        }
        else{
           wrongAnswerAnimation(square);

           setTimeout(() => {
            Array.from(blocks).forEach( (element) => {resetBoardAnimation(element)});
          }, 100);

          play(1);

        }
    };

    //listening for click events
    Array.from(blocks).forEach(function(element) {
        element.addEventListener('click', checkAnswer);
      });
  
}

function game()
{
    //current level of the game 
    //***note: the level is also the length of the pattern to be memorized
    let game_level = 1; 
    let run = false;

    play(game_level);
} 


game();

