let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int;

document.getElementById('startTimer').addEventListener('click',()=>{
    int = setInterval(displayTimer,10);
})

document.getElementById('pauseTimer').addEventListener('click',()=>{
    clearInterval(int);
})

function displayTimer(){
    seconds+=10;
    if(seconds == 60){
        seconds = 0 ;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + seconds : seconds;

    timerRef.innerHTML = `${h} : ${m} : ${s}`;
}
