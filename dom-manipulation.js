const container = document.querySelector('div.container');
//Store an element

const para = document.createElement('p');
// Create an Element

para.innerText = 'Hello Bruh';
// Adds text inside new element

container.append(para);
// Adds the created element in Dom
//Added inside the div with class container


para.classList.add('para1');
//Adds a class attribute with value para1


para.setAttribute('title', 'This is a paragragh');
//Adds a title attribute with value 'This is a paragraph

para.removeAttribute('title');
//Removes the title attribute 


para.remove();
//Removes the new element








// const container = document.querySelector('.container');


// const span = document.createElement('span')
// const p = document.createElement('p')

// span.innerText = 'this is a span';



// // p.appendChild(span);
// // container.appendChild(p);



// p.innerText = 'This is a p tag'

// container.append(p, span)



























// const container = document.querySelector('.container');

// let para = document.createElement('p');
// let span = document.createElement('span');


// container.innerHtml = "<em> I am fancy italic div </em>";

// let text = para.textContent = "This is para tag";

// let text1 = span.innerHtml = "This is new Span";


// let paraTag = container.appendChild(para);
// //Paragraph tag is added as a child of 
// // div tag


// let spanTag = paraTag.appendChild(span);
// //The text of first parameter is added inside 
// // paragraph tag and span is added a child of
// // paragraph tag




// console.log(text);
// console.log(text1);
// console.log(text2);

