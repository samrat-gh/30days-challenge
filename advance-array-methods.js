           
     const num = [1, 2, 3, 4, 5, 6, 7, 8];
     
     let num1 = num.map((a, ind) => 
     {
      return a*ind;
     })

     //The First parameter of .map() is for iteration which return the element of array one by one
     // The Second parameter is for index and any variable can be assigned to it

     let num2 = num.concat(num1);


     //Expected output 0, 2, 6, 



     let info = [
      {name:"sam", age:16},
      {name:"mami", age:6},
      {name:"dham", age:19}, ]

      let newInfo = info.filter((element,  index) => {
            if(element.age < 18)
            return element.name;
      })

      // A Simple example on how filter() works