const buttonTasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');

function addTask(taskText) {
    if (taskText) {
        tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">
                    ${taskText}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);

        const taskRemove = tasksList.querySelector('.task__remove');
        const task = tasksList.querySelector('.task');

        taskRemove.addEventListener('click', function (event) {
            event.preventDefault();
            task.remove();
        });
    }
}

buttonTasksAdd.addEventListener('click', function (event) {
    event.preventDefault();
    addTask(taskInput.value.trim());
    taskInput.value = '';
});