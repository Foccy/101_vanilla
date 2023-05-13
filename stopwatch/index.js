const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const resetButton = document.querySelector('.reset')

let timerId;

let [msec, sec, min] = [0,0,0]



const displayTimer = () =>{
    const fMin = min<10 ? `0${min}` : min;
const fSec = sec<10 ? `0${sec}` : sec;
const fMsec = msec<10 ? `0${msec}` : msec;

    const time = document.querySelector('.time')
    time.innerText = `${fMin} : ${fSec} : ${fMsec}`
}

const timer = () =>{
    msec++; //0.01초씩 증가 100 -> 1초

    if (msec === 100) {
        msec= 0;
        sec ++;
        if(sec === 60){
            sec = 0;
            min++;
        }
    }

    displayTimer()
}

const start = ()=>{
    timerId=setInterval(timer,10) //1.  이 함수를 stop 하거나 reset할수 있는 기능을 추가해야한다.
}; 
const stop = ()=>{
    clearInterval(timerId)
};
const reset = ()=>{
    stop();
    [msec,sec,min] = [0,0,0];
    displayTimer()
};


startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);