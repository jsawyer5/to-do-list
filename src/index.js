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
}) ();



