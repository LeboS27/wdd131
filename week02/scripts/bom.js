const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_____');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.tetxContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);
