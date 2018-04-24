const randomNumber = () => Math.floor(Math.random() * 256);

const randomColorCode = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

const colorCodeEl = document.querySelector('.color-code');
const boxes = document.querySelectorAll('.box-color');
const modalRight = document.querySelector('.right');
const modalFalse = document.querySelector('.false');
const scorePanel = document.querySelector('.score');
let correctAnswer;
let score = 0;

scorePanel.textContent = score;

function newStage(){
    const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()]
    boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
    });
    correctAnswer = Math.floor(Math.random() * 3);
    colorCodeEl.textContent = colorCodes[correctAnswer];
}

boxes.forEach((el, index) => {
    el.addEventListener('click', () =>{
        el.classList.add('show');
        if(correctAnswer === index){
            modalRight.classList.add('on');
            score++;
        }else{
            modalFalse.classList.add('on');
            document.querySelector('.result-score').textContent = score;
        }
        scorePanel.textContent = score;
        
    });
});

document.querySelector('.right .close').addEventListener('click', () => {
    boxes.forEach(el => {
        el.classList.remove('show');
    });
    modalRight.classList.remove('on');
    newStage();
});
document.querySelector('.false .close').addEventListener('click', () => {
    boxes.forEach(el => {
        el.classList.remove('show');
    });
    modalFalse.classList.remove('on');
    score = 0;
    scorePanel.textContent = score;
    newStage();
});

newStage();