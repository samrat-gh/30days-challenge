// var a = 99;
// console.log(this.a);


function num() {
    let a = 20;
    let b = 15;
    let c =  a + b;
    
}

console.log(this.num);
//Return whole function


function num() {
    let a = 20;
    let b = 15;
    let c =  a + b;  
}

let info = {
    firstname: 'Anam', lastname: 'karki',
    id: 7226, location: 'Butwal',

    fullname: function () {

    return this.firstname + " " + this.lastname }
        
};
console.log(info.fullname());
