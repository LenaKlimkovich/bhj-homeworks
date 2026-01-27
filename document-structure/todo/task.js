const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const btnAdd = document.getElementById('tasks__add');


btnAdd.addEventListener('click', event => {
    event.preventDefault();
})

taskInput.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
        event.preventDefault();

        taskList.insertAdjacentHTML('afterbegin', `
<div class="task">
  <div class="task__title">
    ${taskInput.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
`);

        const taskRemove = document.querySelector('.task__remove');
        const task = document.querySelector('.task');
        taskRemove.addEventListener('click', e => {
            e.preventDefault();
            task.remove();
        })
        taskInput.value = '';
    }
})
