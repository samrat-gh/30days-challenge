let a = call(5, 7);
console.log("I am hero");


function call(a,b){
    console.log("I am zero");
    return a + b;
    
}

// The above is function hoisting

//The below one is variable hoisting but a bad practice

n = 10;
console.log(n);
var n;