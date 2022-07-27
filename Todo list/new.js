
const container = document.querySelector('div.container');

// To call elementCreator()

// const nodeItems = [];
// const nodeItems = [
//     {
//         order : 5,
//         setLabel: 'Get Breakfast',
//         checkStatus : 'false',
//         id: 'breakfast'
    
//     },

//         {
//             order : 1,
//             setLabel: 'wake up',
//             checkStatus : 'false',
//             id: 'wake'
        
//         },

//             {
//                 order : 3,
//                 setLabel: 'Brush & Bath',
//                 checkStatus : 'false', 
//                 id:'fresh'
            
//             },

//                 {
//                     order : 2,
//                     setLabel: 'Jogging',
//                     checkStatus : 'false',
//                     id: 'exercise'
                
//                  },

//                     {
//                         order : 4,
//                         setLabel: 'Have some rest',
//                         checkStatus : 'true',
//                         id: 'rest' 
                      
//                     }
       
// ];

// function elementCreater() {

//     let myDom = nodeItems.map( (item, ind) => {
//     var item1 = document.createElement('input');
//     var item2 = document.createElement('label');
//     var breaker = document.createElement('br');


//     item2.textContent = item.setLabel;

//     item1.setAttribute('type', 'checkbox');
//     item1.setAttribute('id', item.id);
//     item2.setAttribute('for', item.id);
  
//     container.append(item1, item2, breaker);

// });

// }

// elementCreater();

const nodeItems = [];
localStorage.setItem("arr", JSON.stringify(nodeItems));


const addBtn = document.querySelector('#add-item');
let entryBox = document.querySelector('input#entry-box');
let entryContainer = document.querySelector('.entry-container');

entryContainer.style.display="none";

addBtn.addEventListener('click', (event)  => {
   event.preventDefault();
   entryContainer.style.display="block";

});



let saveEntry = document.querySelector('#save-entry');
let cancelEntry = document.querySelector('#cancel-entry');

    saveEntry.addEventListener('click', ()=> {

        if(entryBox.value === ""){
            alert("Empty text field, enter task");
            return onCancel();
        }

             newObj =  JSON.stringify({
                order: nodeItems.length + 1,
                setLabel: entryBox.value,
                checkStatus: false,
                id: entryBox.value 
        });

        localStorage.arr.push(setItem("arr", newObj));

 const hamroElement = JSON.parse(localStorage.getItem("arr"));
 console.log(hamroElement);
//  nodeItems.push(hamroElement);
 entryBox.value = "";
 newElementCreater();

            }); 

         function onCancel() {
              entryContainer.style.display="none";
         }
         

         function newElementCreater() {
                 let item =  getData();
                 console.log(item);


                var item1 = document.createElement('input');
                var item2 = document.createElement('label');
                var breaker = document.createElement('br');
            
            
                item2.textContent = item.setLabel;
            
                item1.setAttribute('type', 'checkbox');
                item1.setAttribute('id', item.id);
                item2.setAttribute('for', item.id);
              
                container.append(item1, item2, breaker);
            
                
         }


         function getData(ind){

            let item = JSON.parse.apply(localStorage.getItem(arr))
            return item;
         } 



// in newElementCreator I am using the last element of the array to create new element 
// instead i should be using the getItem property and move to complete element fetching from 
// local storage by elimanting nodeItems

















