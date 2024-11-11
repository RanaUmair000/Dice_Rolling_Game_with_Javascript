const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');
const score0 = document.querySelector('.score0');
const score1 = document.querySelector('.score1');
const cScore0 = document.querySelector('.c-score0');
const cScore1 = document.querySelector('.c-score1');
const playerh1 = document.querySelector('.playerh1');
const playerh2 = document.querySelector('.playerh2');

const newBtn = document.querySelector('.new');
const rollBtn = document.querySelector('.roll');
const holdBtn = document.querySelector('.hold');
const diceEl = document.querySelector('.dice');
const mainDice = document.querySelector('.main-dice');

let score, currentScore, activePlayer, player;



score0.textContent = 0;
score1.textContent = 0;

const restart = function(){
    
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0.textContent = 0;
    score1.textContent = 0;
    cScore0.textContent = 0;
    cScore1.textContent = 0;
    
    diceEl.classList.add('hidden');
    mainDice.classList.remove('hiddend');
    player0.classList.remove('winner-player');
    player1.classList.remove('winner-player');
    player0.classList.add('active-player');
    player1.classList.remove('active-player');

    document.querySelector('.win').classList.add('ehidden');
    document.querySelector('.win2').classList.add('ehidden');
    document.querySelector('.lose').classList.add('ehidden');
    document.querySelector('.lose2').classList.add('ehidden');
}

restart();

const switchPlayer = function(){
    currentScore = 0;
    document.querySelector(`.c-score${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 1 ? 0 : 1;

    player0.classList.toggle('active-player');
    player1.classList.toggle('active-player');
}

diceEl.classList.add('hidden');
mainDice.classList.remove('hiddend');
    rollBtn.addEventListener('click', function() {

        if(playing){

            mainDice.classList.add('hiddend');

            //1: Rolling The Dice
            let dice = Math.trunc(Math.random() * 6) + 1;

            //2: Display Image
            diceEl.classList.remove('hidden');
            diceEl.src = `dice-${dice}.png`;

            //3: Game Over
            if(dice !== 1){
                currentScore = currentScore + dice;
                document.querySelector(`.c-score${activePlayer}`).textContent = currentScore;

            }else{
                
                switchPlayer();
                // if(activePlayer === 1){
                //     player0.style.backgroundColor = 'rgba(139, 139, 139, 0.618)';
                //     player1.style.backgroundColor = 'rgba(211, 211, 211, 0.618)';
                // }else{
                //     player1.style.backgroundColor = 'rgba(139, 139, 139, 0.618)';
                //     player0.style.backgroundColor = 'rgba(211, 211, 211, 0.618)';
                // }

            }

        }
    });

    holdBtn.addEventListener('click', function(){

        if(playing){
            score[activePlayer] += currentScore;
            document.querySelector(`.score${activePlayer}`).textContent = score[activePlayer];

            if(score[activePlayer] >= 50){

                playing = false;
                diceEl.classList.add('hidden');
                document.querySelector('.win').classList.remove('hidden');
                document.querySelector('.lose').classList.remove('hidden');

                document.querySelector(`.player${activePlayer}`).classList.add('winner-player');
                document.querySelector(`.player${activePlayer}`).classList.remove('active-player');

                if(score0.textContent > score1.textContent && score1.textContent < score0.textContent){
                    document.querySelector('.win').classList.remove('ehidden');
                    document.querySelector('.lose2').classList.remove('ehidden');
                    document.querySelector('.lose').classList.add('ehidden');
                    document.querySelector('.win2').classList.add('ehidden');

                }else if(score0.textContent < score1.textContent && score1.textContent > score0.textContent){

                    document.querySelector('.lose').classList.add('ehidden');
                    document.querySelector('.win2').classList.remove('ehidden');
                    document.querySelector('.lose').classList.remove('ehidden');
                    document.querySelector('.win').classList.add('ehidden');
                }

            }else{

                switchPlayer();
            }

        }
    });


newBtn.addEventListener('click', function() {
    restart();

});