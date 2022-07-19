


const saveBtn = document.querySelector('.action-btn button:nth-child(1)');
const cancelBtn = document.querySelector('.action-btn button:nth-child(2)');

let checklist = document.querySelectorAll('div.container form input');

let checkboxArray = Array.from(checklist);

let checkboxValue = checkboxArray.map((element, ind) => {
    return element.checked;
});


saveBtn.addEventListener('click', (event) => {
    event.preventDefault();

    for(let i = 0; i < checkboxArray.length; i++) {
        if(checkboxArray[i].checked === true) {
              checkboxValue[i] = true;
        }
        else {
        }
    } 
    console.log(checkboxValue);
});





