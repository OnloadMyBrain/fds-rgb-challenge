const randomNumber = () => Math.floor(Math.random() * 256);

const randomColorCode = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

const colorCodeEl = document.querySelector('.color-code');
const boxes = document.querySelectorAll('.box-color');

let correctAnswer;
let score = 0;
document.querySelector('.score').textContent = score;

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
            //alert('정답!!');
            document.querySelector('.modal.right').classList.add('on');
            // document.querySelectorAll('.box-color')[index].classList.add('show');
            score++;
        }else{
            //alert('틀림');
            document.querySelector('.modal.false').classList.add('on');
            score = 0;
        }
        document.querySelector('.score').textContent = score;
        
    });
});

document.querySelector('.modal.right .close').addEventListener('click', () => {
    boxes.forEach(el => {
        el.classList.remove('show');
    });
    document.querySelector('.modal.right').classList.remove('on');
    newStage();
});
document.querySelector('.modal.false .close').addEventListener('click', () => {
    boxes.forEach(el => {
        el.classList.remove('show');
    });
    document.querySelector('.modal.false').classList.remove('on');
    newStage();
});

newStage();

// boxes[0].addEventListener('click', function(){
//     if(correctAnswer === 0){
//         alert('정답!!');
//     }else{
//         alert('틀림');
//     }
// });
// boxes[1].addEventListener('click', function(){
//     if(correctAnswer === 1){
//         alert('정답!!');
//     }else{
//         alert('틀림');
//     }
// });
// boxes[2].addEventListener('click', function(){
//     if(correctAnswer === 2){
//         alert('정답!!');
//     }else{
//         alert('틀림');
//     }
// });