const dropdowns = document.querySelectorAll(".dropdown");
const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownLinks = document.querySelectorAll(".dropdown__link");


dropdown.addEventListener('click', function() {
    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
});

dropdownLinks.forEach(function(dropdownLink) {
    dropdownLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownValue.textContent = dropdownLink.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    });
});

document.addEventListener('click', function(event) {
    dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(event.target)) {
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});
