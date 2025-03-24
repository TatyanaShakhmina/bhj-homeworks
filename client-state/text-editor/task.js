const editor = document.getElementById('editor');

window.addEventListener('load', () => {
    const text = localStorage.getItem('editorText');
    if (text) {
        editor.value = text;
    }
});
editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});