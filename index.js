// Create task function
const tdl = document.getElementById('TDL');

function clearTaskView()
{
    tdl.innerHTML = '';
}

function createTaskView(task)
{

    const listElement = document.createElement('li');
    listElement.innerHTML = task.name
    tdl.appendChild(listElement)

    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.onclick = function() {
        task.done = true;
        updateTdlView(taskList);
    };
    listElement.appendChild(span);
    span.appendChild(txt);
}

function updateTdlView(taskList)
{
    clearTaskView()
    taskList.tasks.forEach(function(task) {
        if (task.done === false)
            createTaskView(task)
    });
}

// Object creation taskList
function TaskList()
{
    this.tasks = [];
    this.append = function(task) {
        if (typeof task === 'string') {
            this.tasks.push(new Task(task));
        } else if (typeof task == 'object') {
            if (task.name === undefined) {
                console.error('Task need a name property')
                return;
            }
            if (task.done === undefined) {
                task.done = false
            }
            this.tasks.push(task);
        } else {
            console.error('Unknown task type')
        }
    }
}

// Object creation task

function Task(name)
{
    this.name = name;
    this.done = false;
    // this.hello = function() {
    //   console.log('hello')
    // }
}

// console.log(typeof task1 == 'object')

// taskObject.done = true;
var taskList = new TaskList();

// console.log(task1);
// console.log(task3);

const taskAlreadyInserted = [
    'Learn to learn',
    'Play piano',
    'Read a book',
    'Hit the gym',
]

taskAlreadyInserted.forEach((element) => taskList.append(element));

console.log(taskList);
const jsonString = JSON.stringify(taskList)
console.log(JSON.parse(jsonString));

updateTdlView(taskList);
updateTdlView(taskList);
// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create  new task

const myInput = document.getElementById('myInput')

function createTaskFromUserInput()
{
    const inputValue = myInput.value;
    if (inputValue == '') {
        alert('You must write something!');
        return;
    }
    taskList.append(inputValue)
    myInput.value = ''
    updateTdlView(taskList);
}
myInput.onkeydown = function() {
    if (event.key == 'Enter') {
        createTaskFromUserInput()
    }
}

const addBtn
    = document.getElementById('addBtn');

addBtn.onclick = createTaskFromUserInput;
