

let product = (a, b) => { 
 var m = a*b;
 console.log("The product is " + m );
}

let callbackSum = (j, k, product) =>
{
    console.log("Step 1 accomplished");
    console.log(j + k);

    if(product) {
    product(); }
}

callbackSum(5, 7, product(5, 7));

//The above function is synchronous function which doesn't allow the called function to carry out until 
// callback function is executed.

