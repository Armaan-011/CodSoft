const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!");        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = "";
    saveData();
}

function checkMark(e){    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        console.log("Test")
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}

listContainer.addEventListener("click", checkMark, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    localContainer.innerHTML = localStorage.getItem("data");
}
showTask();