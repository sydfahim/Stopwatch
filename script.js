let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let hoursDisplay = document.querySelector(".hour");
let minsDisplay = document.querySelector(".min");
let secsDisplay = document.querySelector(".sec");
let msDisplay = document.querySelector(".ms");
        
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
        
function formatTime(value) {
    return value < 10 ? "0" + value : value;
}
        
function updateDisplay() {
    hoursDisplay.textContent = formatTime(hours);
    minsDisplay.textContent = formatTime(minutes);
    secsDisplay.textContent = formatTime(seconds);
    msDisplay.textContent = "." + formatTime(milliseconds);
}
        
startBtn.addEventListener("click", function() {
    interval = setInterval(function() {
        milliseconds += 1;

        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds += 1;
        }
        
        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }
                
        if (minutes >= 60) {
            minutes = 0;
            hours += 1;
        }
        
        updateDisplay();
        }, 10);
            
    startBtn.disabled = true;
    stopBtn.disabled = false;
});
        
stopBtn.addEventListener("click", function() {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
        
resetBtn.addEventListener("click", function() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});