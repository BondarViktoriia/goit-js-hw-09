
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs = {
    btnStart :document.querySelector('[data-start]'),
    btnStop : document.querySelector('[data-stop]')
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

