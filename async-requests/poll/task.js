let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE){

        let response = JSON.parse(xhr.responseText);
        const pollTitle = document.getElementById('poll__title');
        const pollAnswers = document.getElementById('poll__answers');

        pollTitle.textContent = response.data.title;

        response.data.answers.forEach(function(answer) {
            pollAnswers.innerHTML +=
                `<button class="poll__answer">
                       ${answer}
                    </button>`;
        });

        const pollAnswerAll = document.querySelectorAll('.poll__answer');
        pollAnswerAll.forEach(function(pollAnswer) {
            pollAnswer.addEventListener('click', function(event) {
                event.preventDefault();

                alert("Спасибо, ваш голос засчитан!");
            });
        });
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.send();

