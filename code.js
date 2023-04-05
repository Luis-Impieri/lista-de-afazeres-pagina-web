const inputField = document.querySelector('input[name="afazeres"]');
const submitButton = document.querySelector('input[name="confirmar"]');
const todoList = document.createElement('div');
document.body.appendChild(todoList);

submitButton.addEventListener('click', function() {
  const todoItem = document.createElement('input');
  todoItem.type = 'checkbox';
  todoItem.id = inputField.value;
  const todoLabel = document.createElement('label');
  todoLabel.setAttribute('for', inputField.value);
  todoLabel.textContent = inputField.value;
  todoList.appendChild(todoItem);
  todoList.appendChild(todoLabel);
  inputField.value = '';
});
