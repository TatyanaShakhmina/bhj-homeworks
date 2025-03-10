const fontSizes = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");

fontSizes.forEach(function(fontSize, index) {
    fontSize.addEventListener('click', function(event) {
        event.preventDefault();
        fontSizes.forEach(function(item) {
            item.classList.remove('font-size_active');
        });
        fontSize.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        if (fontSize.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } else if (fontSize.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        }
    });
});
