// selector
const toDOInput=document.querySelector('.todo-input');
const toDOButton=document.querySelector('.todo-button');
const toDOList=document.querySelector('.todo-list');
const filterOption=document.querySelector(".filter-todo");

// eventListener

toDOButton.addEventListener('click',addTodo);
toDOList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);


// function
function addTodo(event){

    // prevent default
   event.preventDefault();
    // div
   const todoDiv=document.createElement('div');
   todoDiv.classList.add('todo');
// create li
   const newtoDo=document.createElement('li');
   newtoDo.classList.add('todo-item');
   newtoDo.innerHTML=toDOInput.value;

   todoDiv.appendChild(newtoDo);
// completed button
   const completedButton=document.createElement('button');
   completedButton.innerHTML='<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");

   todoDiv.append(completedButton);
// trashed button
   const trashButton=document.createElement('button');
   trashButton.innerHTML='<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");

   todoDiv.append(trashButton);

//    append to todolist
   toDOList.appendChild(todoDiv);
//    clear todoinput value
toDOInput.value="";
}
// function deletecheck

function deleteCheck(e){

const item =e.target;
if(item.classList[0]==="trash-btn"){
  
    const todo=item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend",function(){
        todo.remove();
    })

}

// check marks
if(item.classList[0]==="complete-btn"){
    const todo=item.parentElement;
    todo.classList.toggle("completed");
}
}

// filter check
function filterTodo(event){
 console.log(event.target.value);
 const todos=toDOList.childNodes;
 todos.forEach(function(todo){
     console.log(todo);
     
     
    switch (event.target.value) {
        case "all":{
         todo.style.display="flex";
            break;
        }
          
    case "completed":{
        if(todo.classList.contains("completed")){
            todo.style.display="flex";
        }
        else{
            todo.style.display="none"
        }
         break;
    }
   
      case "incompleted":{
        if(!todo.classList.contains("completed")){
            todo.style.display="flex";
        }
        else{
            todo.style.display="none"
        }
        break;
    }
    }
 });
}
