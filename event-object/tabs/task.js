const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll('.tab__content');

tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('tab_active'));
        tab.classList.add('tab_active');
        contents.forEach(content => content.classList.remove('tab__content_active'));
        contents[index].classList.add('tab__content_active');
    });
});