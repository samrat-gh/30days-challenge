let parent = document.getElementById('container');
let child = document.getElementById('child-container');
let button = document.getElementById('btn');

button.addEventListener('click', (element) => {
    console.log('button click triggered');
}, {capture: true});


parent.addEventListener('click', (element) => {
    console.log('parent event triggered');
}, {capture: true});


child.addEventListener('click', (element) => {
    console.log('Child event triggered');
})

document.addEventListener('click', (element) => {
    console.log('Document click triggered');
})