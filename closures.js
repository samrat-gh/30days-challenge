function outerFn(outerVar) {
       return function innerfn(innerVar) {
              console.log("outerVar is " + outerVar);
              console.log("innerVar is " + innerVar);
       } 
}

const newFn = outerFn('outside');
newFn();


let a  = 20;
a = 40;


console.log(a);
