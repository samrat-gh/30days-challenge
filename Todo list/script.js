
let container = document.querySelector('.container');
let addBtn = document.querySelector('#add-item');

let addContainer = document.querySelector('.entry-container');
let textField = document.querySelector('#entry-box');
let saveBtn = document.querySelector('#save-entry');
let cancelBtn = document.querySelector('#cancel-entry');

const clearStorage = document.querySelector('#clear-data');

var dataArray = []; 
dataArray = getData();  

if (dataArray != null) {
    newTaskGenerator();


}



saveBtn.addEventListener('click', 
function receiver(event) {
    event.preventDefault();
       if(textField.value == ""){
        alert("Text field empty, Enter task");
        return;
       } 

       else {
        let taskName = textField.value;
        let dataArray = getData();
        
        if (dataArray == null){
            dataArray = [taskName];
            setData();
        }

        dataArray.push(taskName);
        setData(dataArray);
        taskGenerator(taskName);
       }
  });


function taskGenerator(name) {
    let dataArray = getData();
    console.log(dataArray);
    if(dataArray != null ) {
        
const item1 = document.createElement('input');
const item2 = document.createElement('label');
const breaker = document.createElement('br');

item1.setAttribute('type', 'checkbox');
item1.setAttribute('id', name);
item2.setAttribute('for', name);
item2.innerText = name;

console.log(name);

container.append(item1, item2, breaker);
} 
}




function setData(dataArray) {
    localStorage.setItem("list", JSON.stringify(dataArray));  
}



function getData() {
    return JSON.parse(localStorage.getItem("list"));
}





cancelBtn.addEventListener('click', ()=> {
    addContainer.style.display = "none";

})

addBtn.addEventListener('click', ()=> {
    addContainer.style.display = "block";
})

clearStorage.addEventListener('click', ()=>{
    localStorage.clear();
    document.location.reload(true);
});


function newTaskGenerator() {

    let dataArray = getData();
    dataArray.map((name) => {

const item1 = document.createElement('input');
const item2 = document.createElement('label');
const breaker = document.createElement('br');

item1.setAttribute('type', 'checkbox');
item1.setAttribute('id', name);
item2.setAttribute('for', name);
item2.innerText = name;

container.append(item1, item2, breaker);
    }) };


    function tickCheck() {
    // if (dataArray != null){
    
        let nodeList = Array.from(container.querySelectorAll('input'));
        console.log(nodeList);

        let nodeListStatus = nodeList.map((item)=> {
        return item.checked; }
        );
        console.log(nodeListStatus);

        nodeList.map((item, ind)=> {
            if(item.checked != nodeListStatus[ind]) {
                 nodelistStatus[ind] = item.checked;
            } }
        )
    }

    let editStatus = document.querySelector('#edit-status');
    console.log(editStatus);

    let saveStatus = document.querySelector('#save-status');
    console.log(saveStatus);


editStatus.addEventListener('click',
    function enableSave() {
    let a = document.querySelector('button #save-status');
    saveStatus.style.display="block";
    editStatus.style.display="none";
    }) ;