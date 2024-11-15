import todoListArray from './todoList.js'

function renderTodoList() {
  let todoListHtml = "";
  todoListArray.forEach((singleTodoListElement, index) => {
    //console.log(singleTodoListElement)
    const { item, dueDate } = singleTodoListElement;
    // console.log(item ,dueDate );
    todoListHtml += `
                <div class="todo-list-row">
                <div><p class="todo-item">${item}</p></div>
                <div><p class="todo-item-due-date">${dueDate}</p></div>
                <div><button class="js-delete-todo-item delete-todo-item">Delete</button></div>
                </div>
             `;
  });

  const todoListElement = document.querySelector(".js-show-todo-list");
  todoListElement.innerHTML = todoListHtml;

  const todoDeleteButtons = document.querySelectorAll(".js-delete-todo-item");
  todoDeleteButtons.forEach((todoDeleteButton, index) => {
    todoDeleteButton.addEventListener("click", () => {
      todoListArray.splice(`${index}`, 1);
      console.log(todoListArray);
      //console.log("Hello")
      renderTodoList();
    });
  });
}

renderTodoList();

const addButton = document.querySelector(".js-add-button");
addButton.addEventListener("click", addToTodoList);

const userInputTextbox = document.querySelector(".js-input-text");
const userInputDate = document.querySelector(".js-input-date");

userInputTextbox.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    addToTodoList();
  }
});

let inputDateErrorMessage=document.querySelector(".js-input-date-error-message");
let inputTextErrorMessage=document.querySelector(".js-input-text-error-message");
function addToTodoList() {
  const userInputValue = userInputTextbox.value;
  const userInputDateValue = userInputDate.value;
  console.log(userInputValue);
  console.log(typeof userInputDateValue);
  if (userInputValue === "") {
    inputTextErrorMessage.classList.add("input-text-error-message");
    inputTextErrorMessage.innerText = "textbox cannot be blank";
  } else if (userInputDateValue === "") {
    inputDateErrorMessage.innerText = "Please select a Date";
  }
  //else if(checkForDuplicateItemUsingVars(userInputValue,userInputDateValue))
  else if (
    checkForDuplicateItemUsingObject({
      item: userInputValue,
      dueDate: userInputDateValue,
    })
  ) {
    alert("Item allready exist");
  } else {
    todoListArray.push({
      item: userInputValue,
      dueDate: userInputDateValue,
    });
    inputTextErrorMessage.innerHTML=''
    inputDateErrorMessage.innerHTML=''
  }

  console.log(todoListArray);
  userInputTextbox.value = "";
  userInputTextbox.focus();
  renderTodoList();
}

//renderTodoList();

// addButton.addEventListener('click',()=>{
//     const userInputTextbox=document.querySelector('.js-input-text');
//     const userInputValue=userInputTextbox.value;
//     console.log(userInputValue);
//     todoListArray.push(userInputValue);
//     console.log(todoListArray);
//     userInputTextbox.value='';
//     userInputTextbox.focus();
// });
function checkForDuplicateItemUsingVars(userInputValue, userInputDateValue) {
  let flag = false;
  for (let i = 0; i < todoListArray.length; i++) {
    if (
      todoListArray[i].item === userInputValue &&
      todoListArray[i].dueDate === userInputDateValue
    ) {
      flag = true;
      break;
    }
  }
  return flag;
}

function checkForDuplicateItemUsingObject(todoItem) {
  for (let i = 0; i < todoListArray.length; i++) {
    if (JSON.stringify(todoListArray[i]) === JSON.stringify(todoItem)) {
      return true;
    }
  }
  return false;
}
