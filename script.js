const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){                  /*If the Input Box is empty it*/                                              
        alert("No Task added!");                /*will give a pop-up */
    }
    else{
        let li = document.createElement("li");   /*If the Input Box is not empty*/                                                
        li.innerHTML = inputBox.value;           /*it will create a new list item */
        listContainer.appendChild(li);
        let span = document.createElement("span");/*It will create a span element */
        span.innerHTML = "\u00d7";
        li.appendChild(span);                     /*It will append the span element to the list item */
    }
    inputBox.value = "";                         /*After adding the task it will clear the input box */
    saveData();                                 /*It will save the data */
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){              /*If the target element is a list item */
        e.target.classList.toggle("checked");    /*It will toggle the class checked */
        saveData();                             /*It will save the data */
    }
    else if(e.target.tagName === "SPAN"){       /*If the target element is a span */
        e.target.parentElement.remove();        /*It will remove the Parent Element*/
        saveData();                              /*It will save the data */ 
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); /*It will save the data in the local storage */
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); /*It will show the data from the local storage */
}

showTask(); /* This Fn will show the task */