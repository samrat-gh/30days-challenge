
// let array5 = ['Panda', 'Zebra', 'Leopard', 'Lion', 'Tiger']


// // array5.push('Hyna');
// // console.log(array5);


// let m = array5.unshift('Giraffe');
// console.log(array5);


let num = [2, 4, 6, 8, 10]
let num1 = [12, 14, 16, 18, 20]

// num.sort();
// console.log(num);

let num2 = num.concat(num1);

// console.log(num2.reverse()); 


const priceList = [
    { name:'Noodles', cost:'20'},
    { name:'Cookies', cost:'10'},
    { name:'Rice', cost:'180'},
    { name:'Tea', cost:'95'},
    { name:'Masala', cost:'60'},
    { name:'Oil', cost:'240'}
]

let newList = priceList.filter((price)=>{
    return priceList.price <= 70;  
})


let myFun = function(num, num5) {
    console.log(num + num5);
}

myFun(7, 9);



