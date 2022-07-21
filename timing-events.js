

// setTimeout(()=> {
//     document.write('I am hero bruh!');
//     console.log('I am back');

// }, 2000);



const timer = setInterval(()=> {
    document.write('The Run is running.');
} , 1000)


setTimeout(()=>  {
clearTimeout(timer);
}
, 5000); 