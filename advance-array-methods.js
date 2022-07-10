           
     const num = [1, 2, 3, 4, 5, 6, 7, 8];
     
     let num1 = num.map((a, ind) => 
     {
      return a*ind;
     })

     //The First parameter of .map() is for iteration which return the element of array one by one
     // The Second parameter is for index and any variable can be assigned to it

     let num2 = num.concat(num1);


     //Expected output 0, 2, 6, 


// A Simple example on how filter() works
     let info = [
      {name:"sam", age:16},
      {name:"mami", age:6},
      {name:"dham", age:19}, ]

      let newInfo = info.filter(x => x.age < 18 );
      //same as newInfo = info.filer(function(x) )

    // let info1 = [
    //     {name:"sam", age:16},
    //     {name:"mami", age:6},
    //     {name:"dham", age:19}, ]
  
    //     let newInfo1 = info.map((element,  index) => {
    //           if(element.age < 18)
    //           return element.name;
    //     })
      
   //Reduce array  method
    let array = [4, 5, 2, 15, 11, 19];
    
    let output = array.reduce(function (sum, num){
        console.log(num);
      sum = sum + num;
      return sum;
    },0) 

    console.log("The sum is " + output);

    //Find maximum number from an array 
     let arr = [4, 5, 2, 15, 11, 19];

     let arrMax = arr.reduce((max, current) => {
     if (current > max) {
     max = current; 
    } 
  return max; }
   
     ,0);


     //ForEach array Method

            
     let dummyArray = [
              {name: 'fountain', price:'45', quality:'7'},
              {name: 'golden', price:'75', quality:'8'}, 
              {name: 'paras', price:'10', quality:'6'}, 
              {name: 'winx', price:'15', quality:'9'}, 
              {name: 'stick', price:'5', quality:'8'}, 
            ]

            // let arr = [4, 9, 7, 48, 26, 15];

            let output1 = dummyArray.forEach((element, ind, list) => {
                 console.log(element);
                 console.log(ind);
                 console.log("list is " + list[ind]); }
              
            )


      //Find array method
       
       let arr1 = [4, 9, 7, 48, 26, 15];

       let newArr1 = arr1.find((num, ind) => {
         if(num % 2 == 0 && num%3 == 0)
         return num;
       }
        )

        console.log(newArr1);
        //It returns the number which is divisible by 2 as well as 3.


     