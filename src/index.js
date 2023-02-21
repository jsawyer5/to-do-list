import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm} from './dom-manip.js';
import './style.css';

blankProjectLoad();

let clickEventsModule = (function() {
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
}) ();

const myToDo = createToDo("Grocery Run", "Go get groceries", "2/15/2023", "Low", "Meat, Eggs");
const myToDo2 = createToDo("Homework", "Do Odin Project Work", "2/22/2021", "medium", "Read Module 12");
console.log("Show me properties on myToDo from index.js....", myToDo);
console.log("Show me properties on myToDo2 from index.js....", myToDo2); 

