const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

const aboutModalClose = getCookie('ifModalClose');
console.log(aboutModalClose);

if (!aboutModalClose) {
    subscribeModal.classList.add('modal_active');
}

modalClose.addEventListener("click", close);

function close() {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'ifModalClose=true; path=/; max-age=3600';
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
    return null;
}
