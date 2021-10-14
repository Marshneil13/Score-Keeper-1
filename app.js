const playerOne = document.querySelector('#player1');
const playerTwo = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const scoreKeeper = document.querySelector('.counter')
const win = document.createElement('span');
const loss = document.createElement('span');
let scoreOne = 0; let scoreTwo = 0;
const inputLimit = document.querySelector('input');
playerOne.addEventListener('click', function(){
    if(inputLimit.value != scoreOne)
    {
    scoreOne+=1;
      scoreKeeper.innerText = `${scoreOne} to ${scoreTwo}`;
    }
    if(inputLimit.value == scoreOne)
    displayResult(Math.max(scoreOne,scoreTwo), Math.min(scoreOne,scoreTwo));
})
playerTwo.addEventListener('click', function(){
    if(inputLimit.value != scoreTwo)
    {
    scoreTwo+=1
      scoreKeeper.innerText = `${scoreOne} to ${scoreTwo}`;
}
if(inputLimit.value == scoreTwo)
    displayResult(Math.max(scoreOne,scoreTwo), Math.min(scoreOne,scoreTwo));
})


function displayResult(winner,looser)
{
    scoreKeeper.innerText = '';
    playerOne.disabled = true;
    playerTwo.disabled = true;
    win.innerText = `${winner}`
    win.style.color = '#00FF00';
    loss.innerText = `${looser}`
    loss.style.color = '#FF0000';
    if (scoreOne > scoreTwo)
    {
        scoreKeeper.append(win);
        scoreKeeper.append(' to ');
        scoreKeeper.append(loss);
    }
    else
    {
        scoreKeeper.append(loss);
        scoreKeeper.append(' to ');
        scoreKeeper.append(win);
}
}
reset.addEventListener('click', function(){
    playerOne.disabled = false;
    playerTwo.disabled = false;
    scoreOne = 0; scoreTwo = 0;
    scoreKeeper.innerText = "0 to 0"
    inputLimit.value = '3';
})