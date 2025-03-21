const send = document.getElementById('send');
const form = document.getElementById('form');
const progress = document.getElementById('progress');

send.addEventListener('click', (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    xhr.upload.addEventListener('progress', function(e) {
        if (e.lengthComputable) {
            let percent = (e.loaded / e.total) * 100;
            progress.value = percent;
        }
    });

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Файл загружен!');
        } else {
            alert('Ошибка при загрузке файла!');
        }
    };

    xhr.send(formData);
});