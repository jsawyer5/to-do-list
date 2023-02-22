import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './dom-manip';
import { saveToDoLocal } from './manage-local-storage.js'

let toDoArray = [];

export const createToDo = () => { 

    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    if (Title == "" || Description == "" || DueDate == "") {
        alert("Title, Description, and Due Date are required fields, please try again!")
        return;
    }

        if (parseISO(DueDate) < startOfToday()) {
            alert("You have entered a date that has already passed!  Please Enter a date greater")
            console.log("due date", parseISO(DueDate));
            console.log("date now", startOfToday());
            return;
        }

        const nodeListCheckList = document.querySelectorAll("li");
        let CheckListArray = [];
        for (let i = 0; i < nodeListCheckList.length; i++) {
            
            let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
            CheckListArray.push(strippedCheckList);
        }

        let CheckList = CheckListArray.join(", ");

        console.log("Called createToDo module...creating todo now");
        console.log({ Title, Decription, DueDate, Priority, CheckList });
        console.log("Pushing this object to the toDoArray....");

        toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
    
        console.log(toDoArray);

        saveToDoToLocal({ Title, Description, DueDate, Priority, CheckList});

        clearForm();

        return { Title, Description, DueDate, Priority, CheckList };
}
    