
function flipAnimation(square,colorChange,rotation) {
    anime({
        targets: square,
        scale: [{value: 1}, {value: 1.15}, {value: 1, delay: 250}],
        rotateY: {value: rotation,dealy: 200},
        backgroundColor: colorChange,
        easing: 'easeInOutSine',
        duration: 300
      });   
}

function play(level)
{

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
            flipAnimation(gamePattern[index],[{value: '#ffcc66'},{value: '#ff6600'}], '+=180');
            index++;
        }
        else{
            clearInterval(revealPattern);
            //reseting to default board state
            gamePattern.forEach((block) => { flipAnimation(block, [{value: '#66ffff'},{value: '#00ccff'}],'-=180')});

        }      
       
    }
    , (500));
    clearInterval();

    //resets the board to the given level
    function reset(level, arrOfDivs){

        Array.from(blocks).forEach(function(element) {
            element.removeEventListener('click', checkAnswer);
          });

        setTimeout(() => {
            Array.from(arrOfDivs).forEach( (block) => flipAnimation(block, [{value: '#66ffff'},{value: '#00ccff'}],'-=180'));
            setTimeout( () => {play(level)}, 500);
        }, 
        760);
    }
   
    let currentIndex =  0;

    function checkAnswer() {
        
        let block = document.getElementById(this.getAttribute("id"));

        if(block === gamePattern[currentIndex]){
            flipAnimation(block, [{value: '#00ff00'}, {value: '#ff6600'}],'+=180')
            currentIndex++;
            if(currentIndex === level){

                if(level === 1){

                    confetti.start();
                    
                    document.getElementById("gameBoard").style.display = "none";
                    document.getElementById("levelTracker").style.display = "none";

                    playAgain = () => { location.reload();}

                    let endMess = document.getElementById('gg');

                    endMess.innerHTML = 'You Won!! <button type="button" id="resetBtn" oncliCK="playAgain()">Play Again</button>';
                    endMess.style = "display: grid; position: absolute; top: 40%; left: 35%; font-size:100px; color: #ff6600; font-family: Goldman";
                    document.getElementById('resetBtn').style = "position: relative; left: 35%; font-size: 20px; font-family: Goldman; color:#00ccff; width: 200px; border-radius:10px"
                }
                else{
                    reset(++level, gamePattern);
                }
    
            }      
               
        }
        else{

            flipAnimation(block, [{value: '#ff5050'}, {value: '#ff0000'}],'+=180')
            reset(1, blocks);
            
        }
    }

    //listening for click events
    Array.from(blocks).forEach(function(element) {
        element.addEventListener('click', checkAnswer);
      });
  
}

play(1);






