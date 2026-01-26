const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

taskInput.addEventListener('keydown', event => {
    if (taskInput.value.trim() !== '' && event.code === 'Enter') {
        event.preventDefault();

        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.textContent = taskInput.value;
        taskTitle.classList.add('task__title');

        const taskRemove = document.createElement('a');
        taskRemove.classList.add('task__remove');
        taskRemove.href = '#';
        taskRemove.innerHTML = '&times;';
        

        task.appendChild(taskTitle);
        task.appendChild(taskRemove);
        taskList.appendChild(task);

        taskRemove.addEventListener('click', e => {
            e.preventDefault();
            task.remove();
        })
        taskInput.value = '';
    }
})
  

