function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"];
    
    const month = monthNames[now.getMonth()];
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdayNames[now.getDay()];


    document.getElementById('weekday').textContent = weekday;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

updateCalendar();
setInterval(updateCalendar, 60000);

let timerInterval = null;
let timerleft = 300; 
let isRunning = false;

function updateTimerDisplay(){
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer-display').textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function toggleTimer() {
    const startBtn = document.getElementById('start-btn');
    
    if (isRunning) {
        // PAUSE
        clearInterval(timerInterval);
        startBtn.textContent = 'Start';
        isRunning = false;
    } else {
        isRunning = true;
        startBtn.textContent = 'Pause';

        timerInterval = setInterval(() => {
            if (timeLeft > 0){
                timeLeft--;
                updateTimerDisplay();
          } else {
                
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.textContent = 'Start';
                alert('Time is up!');
                resetTimer();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 300; 
    document.getElementById('start-btn').textContent = 'Start';
    updateTimerDisplay();
}

updateTimerDisplay();

const chime = new Audio('chime.mp3');
chime.play();