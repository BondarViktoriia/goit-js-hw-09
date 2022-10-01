
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const  refs = {
    btnStart :document.querySelector('button[data-start]'),
    btnStop : document.querySelector('button[data-stop]')
}
let idInterval = null;

refs.btnStart.addEventListener('click', onClickBtnStart);
refs.btnStop.addEventListener('click', onClickBtnStop);

function onClickBtnStart() {
   idInterval= setInterval(() => {
       document.body.style.backgroundColor = getRandomHexColor();
       refs.btnStart.disabled=true;
     }, 1000);
}
function onClickBtnStop() {
    clearInterval(idInterval);
     refs.btnStart.disabled=false;
}

