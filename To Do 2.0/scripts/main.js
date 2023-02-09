console.log("Starts");
const taskStorage = {};
let taskStorer2 = [];

inputTask = document.querySelector(".task-input");
// console.log(inputTask);

addTaskButton = document.querySelector(".add-task");
// console.log(addTaskButton);

toDoContainer = document.querySelector(".to-do-container");

function getDivID() {
  let currentdate = new Date();

  let date = "" + currentdate.getDay();
  let month = "" + currentdate.getMonth();
  let year = "" + currentdate.getFullYear();
  let hours = "" + currentdate.getHours();
  let mins = "" + currentdate.getMinutes();
  let secs = "" + currentdate.getSeconds();

  let dateNow = "";
  dateNow += date + month + year + hours + mins + secs;
  // console.log(date + " " + month + " " + year + " " + hours + " " + mins + " ");
  return dateNow;
}

const taskAppender = () => {
  if (inputTask.value.trim().length <= 0) {
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
  // taskStorage[newDivId] = inputTask.value;
  taskStorer2.push({
    id: newDivId,
    checked: false,
    text: inputTask.value,
  });
  // console.log(taskStorer2);
  toDoContainer.appendChild(newDiv);
  inputTask.value = "";
  //   document.querySelector(".to-do-container").textContent += inputTask.value;
};

inputTask.addEventListener("keyup", function (e) {
  if (e.key === "Enter") taskAppender();
});

doneButton = document.querySelector(".task-done");

const makeTaskDone = (tempID) => {
  // console.log(tempID.parentElement.firstChild.textContent);
  let parentElement = document.getElementById(tempID);
  console.log(parentElement);
  let index = taskStorer2.findIndex(
    (item) => Number(item.id) == Number(tempID)
  );

  //   console.log(tempID);
  if (parentElement.style.color == "green") {
    parentElement.style.color = "black";
    parentElement.style.textDecoration = "none";
    taskStorer2[index].checked = !taskStorer2[index].checked;
    // console.log(taskStorer2);
    // console.log("if is working");
  } else {
    parentElement.style.textDecoration = "line-through";
    parentElement.style.color = "green";

    taskStorer2[index].checked = !taskStorer2[index].checked;
    // console.log(taskStorer2);
    // console.log("else is working");
  }
};

let allSpwanedTasks = document.querySelectorAll(".spawn-div");

const makeTaskDelete = (tempID) => {
  let parentElement = document.getElementById(tempID);
  parentElement.parentNode.remove();
  let index = taskStorer2.findIndex(
    (item) => Number(item.id) == Number(tempID)
  );
  taskStorer2.splice(index, 1);
};

let showAllTaskButton = document.querySelector(".show-all-task-button");

showAllTaskButton.onclick = () => {
  for (const key in taskStorer2) {
    console.log(taskStorer2[key]);
    document.getElementById(taskStorer2[key].id).style.display = "flex";
  }
};

const showCompletedButton = document.querySelector(".show-completed-button");
// console.log(showCompletedButton.textContent);

showCompletedButton.onclick = () => {
  for (const key in taskStorer2) {
    // console.log(taskStorer2[key]);
    if (taskStorer2[key].checked == true) {
      // console.log("hi");
      document.getElementById(taskStorer2[key].id).style.display = "flex";
    } else {
      document.getElementById(taskStorer2[key].id).style.display = "none";
    }
  }
  // for (let i = 0; i < taskStorer2.length; i++) {
  //   const element = array[i];
  // }
};

const resetAllButton = document.querySelector(".reset-all-button");
// console.log(resetAllButton);
resetAllButton.onclick = () => {
  for (const key in taskStorer2) {
    // console.log(taskStorer2[key]);
    document.getElementById(taskStorer2[key].id).remove();
  }
  // for (var key in taskStorer2) {
  //   if (taskStorer2.hasOwnProperty(key)) {
  //     delete taskStorer2[key];
  //   }
  // }
  taskStorer2 = [];
  // taskStorer2;
};

const deleteCompletedButton = document.querySelector(
  ".delete-completed-buttons"
);
deleteCompletedButton.onclick = () => {
  for (const key in taskStorer2) {
    // console.log(taskStorer2[key]);
    if (taskStorer2[key].checked == true) {
      // console.log("hi");
      document.getElementById(taskStorer2[key].id).remove();
      // let index = taskStorer2.findIndex(
      //   (item) => Number(item.id) == Number(taskStorer2[key].id)
      // );
      // taskStorer2.splice(index, 1);
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
