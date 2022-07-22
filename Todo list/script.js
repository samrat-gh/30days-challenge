
const container = document.querySelector('div.container');

const nodeItems = [
    {
        order : 5,
        setLabel: 'Get Breakfast',
        checkStatus : 'false',
        id: 'breakfast'
    
    },

        {
            order : 1,
            setLabel: 'wake up',
            checkStatus : 'false',
            id: 'wake'
        
        },

            {
                order : 3,
                setLabel: 'Brush & Bath',
                checkStatus : 'false', 
                id:'fresh'
            
            },

                {
                    order : 2,
                    setLabel: 'Jogging',
                    checkStatus : 'false',
                    id: 'exercise'
                
                 },

                    {
                        order : 4,
                        setLabel: 'Have some rest',
                        checkStatus : 'true',
                        id: 'rest' 
                      
                    }
       
];


    let myDom = nodeItems.map( (item, ind) => {
    var item1 = document.createElement('input');
    var item2 = document.createElement('label');
    var breaker = document.createElement('br');


    item2.textContent = item.setLabel;

    item1.setAttribute('type', 'checkbox');
    item1.setAttribute('id', item.id);
    item2.setAttribute('for', item.id);
  
    container.append(item1, item2, breaker);

});




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
               nodeItems.push({
                       order: nodeItems.length + 1,
                       setLabel: entryBox.value,
                       checkStatus: false,
                       id: entryBox.value
               })

            }); 

         function onCancel() {
              entryContainer.style.display="none";
         }
         



















