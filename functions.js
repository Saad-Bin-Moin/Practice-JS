// 1. Basic Structure of Function

function myFunction(a, b) {
    return a * b;
  }

  myFunction(4,3);

  // 2. we can assign a function in a variable 

  const x =  myFunction(4,5);

  // 3.  Another way to declare a function

  const y = function (a,b) {return a+b} ; // anonymous function - function without a name

  
  //4. Function Constructor - Function()

  const myFunction1 = new Function ("a", "b","return a+b"); 
  let var1 = myFunction1(5,7);

  // alternative - new keyword can be avoided

  const myFunction2 = function(a,b) {return a*b} // can avoid - new keyword in JavaScript
  let var2 = myFunction2(3,9);
 
// 5. Function Hoisting 
 
myFunction3(5);

function myFunction3(y) {
  return y * y;
}
  

// 6. Self Invoking Functions

(function() {
    let x = "hello";
})  ();

// 7. JavaScript functions - expressions

function myFunction4(a, b) {
    return a * b;
  }
  
  let var3 = myFunction4(4, 3) * 2;

  // 8. Arrow Function 

const var4 = (x,y) => x * y;
var4 (5,7);
var4(3,5);



// 8. 
