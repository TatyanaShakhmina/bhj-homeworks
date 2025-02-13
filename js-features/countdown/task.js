const timer = document.getElementById("timer");
let seconds = Number(timer.textContent);
const reduceSeconds = function () {
    --seconds;
    timer.textContent = seconds;
    if (seconds === 0) {
        clearInterval(countDown);
        alert("Вы победили в конкурсе!");
        timer.textContent = 59;
    }
}
const countDown = setInterval(reduceSeconds, 1000);

