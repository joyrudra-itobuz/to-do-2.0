console.log("Starts");
const taskStorage = {};
let taskStorer2 = [];

inputTask = document.querySelector(".task-input");
addTaskButton = document.querySelector(".add-task");
toDoContainer = document.querySelector(".to-do-container");

const taskAppender = () => {
  if (!inputTask.value.trim().length) {
    return alert("Be Productive! That's Not a Task!");
  }

  const newDiv = document.createElement("div");
  let newDivId = Date.now();

  newDiv.innerHTML = `
    <div id=${newDivId} class="spawn-div" style="color:black"><p>${inputTask.value}</p>
    <div class="spawn-div-buttons" id=${newDivId}>
    <button class='task-done'  onClick='makeTaskDone(this.parentNode.id)'><i class="fa fa-check"></i></button>
    <button class='delete-task' onClick='makeTaskDelete(this.parentNode.id)'><i class="fa fa-trash"></i></button>
    </div>
    </div>
    `;

  taskStorer2.push({
    id: newDivId,
    checked: false,
    text: inputTask.value,
  });

  toDoContainer.appendChild(newDiv);
  inputTask.value = "";
};

inputTask.addEventListener("keyup", function (e) {
  if (e.key === "Enter") taskAppender();
});

doneButton = document.querySelector(".task-done");

const makeTaskDone = (tempID) => {
  let parentElement = document.getElementById(tempID);
  console.log(parentElement);
  let index = taskStorer2.findIndex(
    (item) => Number(item.id) == Number(tempID)
  );

  if (parentElement.style.color == "green") {
    parentElement.style.color = "black";
    parentElement.style.textDecoration = "none";
    taskStorer2[index].checked = !taskStorer2[index].checked;
  } else {
    parentElement.style.textDecoration = "line-through";
    parentElement.style.color = "green";

    taskStorer2[index].checked = !taskStorer2[index].checked;
  }
};

let allSpwanedTasks = document.querySelectorAll(".spawn-div");

const makeTaskDelete = (tempID) => {
  let parentElement = document.getElementById(tempID);
  parentElement.parentNode.remove();
  let index = taskStorer2.findIndex(() => Number(tempID));
  //
  taskStorer2.splice(index, 1);
};

let showAllTaskButton = document.querySelector(".show-all-task-button");

showAllTaskButton.onclick = () => {
  for (const key in taskStorer2) {
    console.log(taskStorer2[key]);
    if (taskStorer2[key] !== null) {
      document.getElementById(taskStorer2[key].id).style.display = "flex";
    }
  }
};

const showCompletedButton = document.querySelector(".show-completed-button");

showCompletedButton.onclick = () => {
  for (const key in taskStorer2) {
    if (taskStorer2[key] !== null) {
      if (taskStorer2[key].checked == true) {
        document.getElementById(taskStorer2[key].id).style.display = "flex";
      } else {
        document.getElementById(taskStorer2[key].id).style.display = "none";
      }
    }
  }
};

const resetAllButton = document.querySelector(".reset-all-button");

resetAllButton.onclick = () => {
  for (const key in taskStorer2) {
    document.getElementById(taskStorer2[key].id).remove();
  }
  taskStorer2 = [];
};

const deleteCompletedButton = document.querySelector(
  ".delete-completed-buttons"
);
deleteCompletedButton.onclick = () => {
  for (const key in taskStorer2) {
    if (taskStorer2[key].checked == true) {
      document.getElementById(taskStorer2[key].id).remove();
    }
  }
  for (const key in taskStorer2) {
    if (taskStorer2[key].checked == true) {
      let index = taskStorer2.findIndex(
        (item) => Number(item.id) == Number(taskStorer2[key].id)
      );
      taskStorer2.splice(index, 1);
    }
  }
};
