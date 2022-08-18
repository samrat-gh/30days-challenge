
const container = document.querySelector('.container');
const inputField = document.querySelector('#entry-field');

let count = 0;

let arrData  = getData();
if (arrData != null) {
        createElement();
}


function inputFieldfn(){
       if (inputField.value ===  "") {
        alert("Enter task");
       }
       else {
        let name = inputField.value;
        myObj = {
            setLabel: name,
            status: false,
        }
        let arrData = getData();
        if(arrData === null) {
          arrData = [JSON.stringify(myObj)];
          setData(arrData);
        }
        else {
        pushData(myObj);
        }
} 
inputField.value = "";
createElement();

}

function createElement() {
     let arrData = getData();

if (count === 0 ){
arrData.map((itemUnparsed, ind)=> {   

let item = JSON.parse(itemUnparsed);
    
   let item1 = document.createElement('input');
    let item2 = document.createElement('label');
    let item3 = document.createElement('div');
    let item4 = document.createElement('button');


   item1.setAttribute('type', 'checkbox');
   item1.setAttribute('id', ind);
   item1.setAttribute('onclick', "statusOperator(this.id)");
   item2.innerText = item.setLabel;
   item4.innerText = "x";


   let labelDiv = container.appendChild(item3);
    labelDiv.append(item1, item2, item4);
    item1.checked = item.status;
    count ++;
 })
}


 else {
    let indexNo = arrData.length - 1;
      let itemUnparsed = arrData[indexNo];
        let item = JSON.parse(itemUnparsed);
            
           let item1 = document.createElement('input');
            let item2 = document.createElement('label');
            let item3 = document.createElement('div');
            let item4 = document.createElement('button');
        
           item1.setAttribute('type', 'checkbox');
           item1.setAttribute('id', indexNo);
           item1.setAttribute('onclick', "statusOperator(this.id)");
           item2.setAttribute('for', item.setLabel);
           item2.innerText = item.setLabel;
           item4.innerText = "x";
           
        
           let labelDiv = container.appendChild(item3);
           labelDiv.append(item1, item2, item4);
           item1.checked = item.status;
 
       
} }



function pushData(data) {
  let newData = JSON.stringify(data);
  let arrData = getData();
  console.log(arrData);
  arrData.push(newData);
  setData(arrData);
}

function setData (myArray) {
    console.log(myArray);
     localStorage.setItem('arr', JSON.stringify(myArray));
}

function getData() {
    let myArray = JSON.parse(localStorage.getItem('arr')); 
    return myArray;
}


function statusOperator(value) {
 let arrData = getData();
 console.log(arrData);

 arrData.map((unparsedItem, ind)=> {
    let item = JSON.parse(unparsedItem);  
    if (ind == value) {
        console.log(ind, value);
        item.status = !item.status;
        arrData[ind] = JSON.stringify(item);
        setData(arrData);
    }


 })
 
}


function clearData() {
    localStorage.clear();
    document.location.reload(true);
}