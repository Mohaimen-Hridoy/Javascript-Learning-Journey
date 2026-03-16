let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

showTasks();

button.addEventListener("click", addTask);

function addTask(){

  let taskText = input.value.trim();

  if(taskText === "") return;

  tasks.push(taskText);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value="";

  showTasks();
}

function showTasks(){

  list.innerHTML="";

  tasks.forEach((task,index)=>{

    let li = document.createElement("li");

    li.textContent = task;

    li.addEventListener("click",()=>{
      li.classList.toggle("completed");
    });

    let del = document.createElement("button");
    del.textContent="X";

    del.onclick = function(){

      tasks.splice(index,1);

      localStorage.setItem("tasks",JSON.stringify(tasks));

      showTasks();
    };

    li.appendChild(del);

    list.appendChild(li);

  });

}