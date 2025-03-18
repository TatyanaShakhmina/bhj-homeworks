const buttonTasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');

function addTask(taskText) {
    if (taskText) {
        let task = document.createElement("div");
        task.classList.add('task');
        tasksList.appendChild(task);

        let taskTitle = document.createElement("div");
        taskTitle.classList.add('task__title');
        task.appendChild(taskTitle);
        taskTitle.textContent = taskText;

        let taskRemove = document.createElement("a");
        taskRemove.classList.add('task__remove');
        task.appendChild(taskRemove);
        taskRemove.textContent = '×';

        taskRemove.addEventListener('click', function (event) {
            event.preventDefault();
            task.remove();
        });
    }
}

buttonTasksAdd.addEventListener('click', function (event) {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
});

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    }
});