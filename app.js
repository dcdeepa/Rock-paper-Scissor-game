const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const Default_value = ROCK;
const DRAW = "DRAW";
const PLAYER_WIN = "PLAYER WIN";
const COMPUTER_WIN = "COMPUTER WIN";

const player_choice = function()
{
    const selection = prompt(`${ROCK},${PAPER},${SCISSOR}`," ").toUpperCase();
    if(selection!==ROCK && 
        selection!==PAPER && 
        selection!==SCISSOR)
    {
        alert(`Invalid choice by default we are choosing ${ROCK} for you`);
        return Default_value;
    }
    return selection
};

const computer_choice = function()
{
    const randomvalue = Math.random()
    if(randomvalue<0.3)
    {
        return ROCK;
    }
    else if(randomvalue<0.6)
    {
        return PAPER;
    }
    else
    {
        return SCISSOR;
    }
}

const result = function(Cchoice , Pchoice)
{
    if (Cchoice === Pchoice)
    {
        alert("Draw");
        return DRAW;
    }
    else if(Cchoice === ROCK && Pchoice === PAPER || Cchoice === PAPER && Pchoice === SCISSOR || Cchoice === SCISSOR && Pchoice === ROCK)
    {
        alert("Player Win");
        return PLAYER_WIN;
    }
    else
    {
        alert("Computer Win");
        return COMPUTER_WIN;
    }
}


startGameBtn.addEventListener("click",function()
{
    console.log("Game is running");
    const player_selection = player_choice();
    console.log(player_selection);
    const computer_selection = computer_choice();
    console.log(computer_selection);
    const winner = result(computer_selection,player_selection);
    console.log(winner);
});
