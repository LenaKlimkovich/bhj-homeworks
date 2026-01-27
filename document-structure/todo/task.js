const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const btnAdd = document.getElementById('tasks__add');

btnAdd.addEventListener('click', (e) => {
e.preventDefault();
if(taskInput.value.trim('') !== ''){
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
}
)
