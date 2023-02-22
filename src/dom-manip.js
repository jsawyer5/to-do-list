import { blankProjectLoad } from "./blank-project-load.js";

export function displayDefaultProject() {

    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.diplay = "";
}

export function addItemToCheckList() {
    const addItem = document.getElementById("add-to-checklist").value;

    if (addItem !== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";

        if (document.querySelectorAll("li").length > 0) {
            console.log("INSIDE MODULE IF....", document.querySelectorAll("li").length);
            const nodeListCheckList = document.querySelectorAll("li");
            console.log(nodeListCheckList);

            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm() {
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++)  {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

export function displayToDo() {
    const removeDivs = documnt.querySelectorAll(".card");
    console.log("show me the node count of current DOM card divs....", removeDivs);
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }


console.log("display to screen");
const projects = document.querySelector(".projects");
const card = document.createElement("div");
card.classList.add("card");
projects.appendChild(card);

let Title = localStorage.getItem("Title");
let Description = localStorage.getItem("Description");
let DueDate = localStorage.getItem("DueDate");
let Priority = localStorage.getItem("Priority");
let CheckList = localStorage.getItem("CheckList");

let _displayArray = {Title, Description, DueDate, Priority, CheckList};
console.log( displayArray);

for (let key in _displayArray) {
    console.log(`${key}: ${ _displayArray[key]}`);
    const para = document.createElement("p");
    para.textContent = (`${key}: ${ _displayArray[key]}`);
    card.appendChild(para);
    }
}






