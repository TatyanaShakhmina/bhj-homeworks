let deadClicks = Number(dead.textContent);
let lostClicks = Number(lost.textContent);

getHole = index => document.getElementById(`hole${index}`);

for (let holeindex = 1; holeindex<10; holeindex++) {
    let hole = getHole(holeindex);
    hole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            ++deadClicks;
            dead.textContent = deadClicks;
        } else if (!hole.className.includes( 'hole_has-mole' )) {
            ++lostClicks;
            lost.textContent = lostClicks;
        }
        if (deadClicks === 10) {
            alert("Победа!");
            deadClicks = 0;
            lostClicks = 0;
            dead.textContent = deadClicks;
            lost.textContent = lostClicks;
        } else if (lostClicks === 5) {
            alert("Вы проиграли!");
            deadClicks = 0;
            lostClicks = 0;
            dead.textContent = deadClicks;
            lost.textContent = lostClicks;
        }
    }
}