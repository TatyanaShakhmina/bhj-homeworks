function scope(element) {
    const coordinates = element.getBoundingClientRect();
    return coordinates.top >= 0 && coordinates.bottom <= window.innerHeight;
}
function inScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
        if (scope(reveal)) {
            reveal.classList.add('reveal_active');
        }
    });
}
document.addEventListener('scroll', inScroll);