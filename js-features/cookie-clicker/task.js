const clicker__counter = document.getElementById("clicker__counter");
let clicks = Number(clicker__counter.textContent);
const cookie = document.getElementById("cookie");
cookie.onclick = function() {
    ++clicks;
    clicker__counter.textContent = clicks;
    if (clicks % 2 === 0) {
        cookie.width="150";
    } else {
        cookie.width="250";
    }
}
