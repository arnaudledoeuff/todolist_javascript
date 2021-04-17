// Create task function
const tdl = document.getElementById('TDL');

function createTask(task) {
  if (task == '') {
    alert('You must write something!');
    return;
  }

  console.log(`Create task ${task}`)

  const listElement = document.createElement('li');
  listElement.innerHTML = task
  tdl.appendChild(listElement)

  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.onclick = function() {
    console.log('rr')
    tdl.removeChild(listElement)
  };
  listElement.appendChild(span);
  span.appendChild(txt);


  // span.className = 'close';
  // span.appendChild(txt);
  // myNodelist.appendChild(span);
}

//
const taskAlreadyInserted = [
  'Learn to learn',
  'Play piano',
  'Read a book',
  'Hit the gym',
]

taskAlreadyInserted.forEach((element) => createTask(element));

// Click on a close button to : the current list item
// var close = document.getElementsByClassName('close');
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = 'none'
//   }
// }

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  console.log(ev.target)
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create  new task

const myInput = document.getElementById('myInput')

function createTaskFromUserInput() {
  console.log('createTaskFromUserInput Called')
  const inputValue = myInput.value;
  createTask(inputValue)
  myInput.value = ''
}
myInput.onkeydown =
    function() {
  if (event.key == 'Enter') {
    console.log('Enter')
    createTaskFromUserInput()
  }
}


const addBtn = document.getElementById('addBtn');

console.log('before')
addBtn.onclick = createTaskFromUserInput;
console.log('after')