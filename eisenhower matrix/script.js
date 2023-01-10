let selectedCell;

const selectCell = (cell) => {
    if (selectedCell) {
        selectedCell.classList.remove("selected");
    }
    cell.classList.add("selected");
    selectedCell = cell;
};

const addTask = () => {
    const task = document.getElementById("task").value;
    if (!task) {
        return;
    }
    if(selectedCell) {
        let tasks = selectedCell.querySelector("p");
        tasks.innerHTML = tasks.innerHTML + "<br>" + task;
        document.getElementById("task").value = "";
    }
};
