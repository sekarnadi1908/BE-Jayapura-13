function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


let tasks = [];

function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskInputPicture = document.getElementById("newPicture");
  const taskValue = taskInput.value.trim();
  const pictureValue = taskInputPicture.value.trim();

  if (taskValue && pictureValue) {
    tasks.push(
      {
        task: taskValue,
        picture: pictureValue
      }
    );
    taskInput.value = "";
    taskInputPicture.value = "";
    renderTasks();
    closeForm()
  }
}

function renderTasks() {
  const list = document.getElementById("games");
  list.innerHTML = "";
  tasks.forEach((task, index) => {

    list.innerHTML += `
            <li>
              <a href="${task.task}">
                <div style="display: flex; flex-direction: column; alig-items: center;">
                  <div class="gambar">
                    <img id="edit-${index}" src="${task.picture}" />
                  </div>
                  <div class="judul">
                  <p></p>
                  <button type="button" class="btn-link" href="${task.task}">Play The Game</button>
                    </a>
                  </div>
                </div>
              </a>
            </li>`;
  });
}



renderTasks()
