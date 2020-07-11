var minutes = 0;
var seconds = 0;
var milisec= 0;

var minhead = document.getElementById("minutess")
var sechead = document.getElementById("secondss")
var milihead = document.getElementById("milisecs")

var interval;

function timer(){
    milisec++
    milihead.innerHTML = milisec;
    if(milisec >= 100){
        seconds++
        sechead.innerHTML = seconds
        milisec = 0;
    }else if(seconds >= 60){
        minutes++;
        minhead.innerHTML = minutes;
        seconds = 0;
    }
}
function start(){

    interval = setInterval(timer,10)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    minutes = 0;
    seconds = 0;
    milisec = 0;
    minhead = minutes
    sechead = seconds
    milihead = milisec
    stop()
}