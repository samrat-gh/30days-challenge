

// setTimeout(()=> {
//     document.write('I am hero bruh!');
//     console.log('I am back');

// }, 2000);



const timer = setInterval(()=> {
    document.write('The code is running.');
} , 1000)


setTimeout(()=>  {
clearInterval(timer);
}
, 5000); 