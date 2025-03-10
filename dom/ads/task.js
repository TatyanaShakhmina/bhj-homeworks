function changeClass(rotator) {
    const rotatorCases = document.querySelectorAll('.rotator__case');
    let activeIndex = -1;
    rotatorCases.forEach((rotatorCase, index) => {
        if (rotatorCase.classList.contains('rotator__case_active')) {
            activeIndex = index;
        }
    });
    if (activeIndex !== -1) {
        rotatorCases[activeIndex].classList.remove('rotator__case_active');
    }
    const nextIndex = (activeIndex + 1) % rotatorCases.length;
    const nextCase = rotatorCases[nextIndex];
    const newColor = nextCase.getAttribute('data-color');
    nextCase.style.color = newColor;
    nextCase.classList.add('rotator__case_active');
}


const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotator => {
     setInterval(() => changeClass(rotator), 1000);
});