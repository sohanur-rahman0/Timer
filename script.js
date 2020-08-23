let second = 0;
let input = prompt("Input Minute of the timer: ");

if (input === ''){
    window.location.reload();
}

let minute = parseInt(input);

if(Number.isNaN(minute)===true){
    window.location.reload();
}

minute -= 1;
second = 60;

let timer = setInterval(time, 1000);

m = document.getElementById("minute");
s = document.getElementById("seconds");

function time()
{

    if(second===0){
        second = 60;
        minute -= 1;
    }

    second-=1;

    if(minute === 0 && second === 0){
        stopCountdown();
        playsound();
    }

    if(minute > 10 && second > 10){
        m.innerHTML = minute;
        s.innerHTML = second;
    }else if(minute < 10 && second <10){
        m.innerHTML = "0" + minute;
        s.innerHTML = "0" + second;
    }else if(minute <10){
        m.innerHTML = "0" + minute;
        s.innerHTML = second;
    }else {
        m.innerHTML = minute;
        s.innerHTML = "0" + second;
    }
    
    
}

function stopCountdown(){
    clearInterval(timer);
}

function playsound(){
    document.getElementById("timeend").style.display = "block";
    document.getElementById("timer").style.display = "none";
    let tune = new Audio("audio/firealarm.mp3");
    tune.play();  
}
