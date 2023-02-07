const inputtask = document.querySelector("#item");
const taskBox = document.querySelector(".task-box");
const clearBtn = document.querySelector(".clear-btn");
let todos = JSON.parse(localStorage.getItem("todo-list"));
let editId;
let isEditTask = false;

function showto(){
    let li = "";
    if(todos){
        
        todos.forEach((todo,id) => {
        
            let complete = todo.status === "completed" ? "checked" : ""; 
            li+= ` <li class="task">
        <label for="${id}">
             <input class="check" onclick ="updatefile(this)" type="checkbox" name="" id="${id}" ${complete}>
             <p class="${complete}">${todo.name}</p>
         </label>
         <div class="setting">
             <i onclick="menu(this)" class="uil uil-ellipsis-h"></i>
             <ul class="task-menu">
                 <li onclick ="editTask(${id},'${todo.name}')"><i class="uil uil-pen">Edit</i></li>
              <li onclick ="deleteTask(${id})"><i  class="uil uil-trash">Delete</i></li>
          </ul>
      </div>
  </li>`;
  
});
};
taskBox.innerHTML = li ;
}
showto();

function updatefile(selelectedfile){
    let taskName = selelectedfile.parentElement.lastElementChild;
    if(selelectedfile.checked){
        taskName.classList.add("done");
        todos[selelectedfile.id].status = "completed";
    }
    else{
        taskName.classList.remove("done");
        todos[selelectedfile.id].status = "pending";
    }
    localStorage.setItem("todo-list",JSON.stringify(todos));   
}
function menu(selelectedfile){
    let taskmenu = selelectedfile.parentElement.lastElementChild;
    taskmenu.classList.add("click");
    document.addEventListener("click",e =>{
        if(e.target.tagName != "I" || e.target != selelectedfile){
            taskmenu.classList.remove("click");
        }
    })
}
function deleteTask(deleteId){
    todos.splice(deleteId,1);
    localStorage.setItem("todo-list",JSON.stringify(todos));
    showto();
}
function editTask(taskid,taskName){
    editId = taskid;
    isEditTask = true;
    inputtask.value = taskName;
}
clearBtn.addEventListener("click",() =>{
    todos.splice(0,todos.length);
    localStorage.setItem("todo-list",JSON.stringify(todos));   
    showto();
})
inputtask.addEventListener("keyup", e =>{
    let usertask = inputtask.value.trim();
    if(e.key === "Enter" && usertask){
        if(!isEditTask){

            if(!todos){
                todos = [];
            }
            inputtask.value = "";
            let taskinfo = {name:usertask,status:"pending"};
            todos.push(taskinfo);
        }else{
            isEditTask = false;
            todos[editId].name = usertask
        }
        localStorage.setItem("todo-list",JSON.stringify(todos));
        showto();
    }
})

































// const inputTask = document.querySelector("#item");
//  const taskBox = document.querySelector(".task-box");
//  const clear = document.querySelector(".clear-btn");
//  let editId;
//  let isEditTask = false;
//  let todos = JSON.parse(localStorage.getItem("todo-list"));

 
// function showtodo() {
//     li = "";
//     if (todos) {
//         todos.forEach((todo, id) => {
//             let completed = todo.status === "completed" ? "done" : "";
//             li += ` <li class="task">
//             <label for="${id}">
//                 <input onclick ="updatefile(this)" type="checkbox" name="" id="${id}" ${completed}>
//                 <p class="${completed}">${todo.name}</p>
//             </label>
//             <div class="setting">
//                 <i onclick="menu(this)" class="uil uil-ellipsis-h"></i>
//                 <ul class="task-menu">
//                     <li onclick ="editTask(${id},'${todo.name}')"><i class="uil uil-pen">Edit</i></li>
//                     <li onclick ="deleteTask(${id})"><i  class="uil uil-trash">Delete</i></li>
//                 </ul>
//             </div>
//         </li>`;

//         });
//     }
   

//     taskBox.innerHTML = li || "<span >Write some here's your self To Do</span>";


// };
// showtodo();


// function updatefile(selectedtask) {
//     let taskName = selectedtask.parentElement.lastElementChild;
//     if (selectedtask.checked) {
//         taskName.classList.add("done");
//         todos[selectedtask.id].status = "completed";
//     } else {
//         taskName.classList.remove("done");
//         todos[selectedtask.id].status = "pending";
//     }
//     localStorage.setItem("todo-list", JSON.stringify(todos));

// };

// clear.addEventListener("click",() =>{
//     todos.splice(0,todos.length);
//     localStorage.setItem("todo-list",JSON.stringify(todos));
//     showtodo();
// })

// function deleteTask(deleteId) {
//     todos.splice(deleteId, 1);
//     localStorage.setItem("todo-list", JSON.stringify(todos));
//     showtodo();


// };
// function editTask(taskid,taskName){
//     editId = taskid;
//     isEditTask = true;
//     inputTask.value = taskName;
// }
// function menu(selectedtask) {
//     let taskMenu = selectedtask.parentElement.lastElementChild;
//     taskMenu.classList.add("show");
//     document.addEventListener("click", e => {
//         if (e.target.tagName != "I" || e.target != selectedtask) {
//             taskMenu.classList.remove("show")
//         }
//     })
// };

// inputTask.addEventListener("keyup", e => {
//     let userTask = inputTask.value.trim();
//     if (e.key === "Enter" && userTask) {
        
//         if(!isEditTask) {
//             todos = !todos ? [] : todos;
//             let taskInfo = {name: userTask, status: "pending"};
//             todos.push(taskInfo);
//         }
       
       
//          else {
//             isEditTask = false;
//             todos[editId].name = userTask;
//         }
           
        
//         inputTask.value = "";
//         localStorage.setItem("todo-list", JSON.stringify(todos));
//         showtodo();
        


//     }
// });