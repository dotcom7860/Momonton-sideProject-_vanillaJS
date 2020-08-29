const clockContain = document.querySelector('.js-clock');
const clockTitle = clockContain.querySelector('h1');

function getDate(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();

    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${second<10?`0${second}`:second}`;
}

function init(){
    getDate();
    setInterval(getDate,1000);
}
init();