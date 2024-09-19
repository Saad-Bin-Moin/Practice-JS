function typeChecker(data){
    return typeof(data); 
}

typeChecker();


//task 2:

function compareValues(a,b){

 
    const obj = new Object ();
   obj.result1 =  (a==b)? 'true':'false';

   obj.result2 = (a===b)? 'true' : 'false';

}

compareValues(3,4);
             
//task 3:

function calculateArea(width, height) {

    if(height ==="")
    {
        height = width;
    }

    return width*height;
}


calculateArea(3,5);

calculateArea(5);
calculateArea(0,4);
calculateArea(0);

//task 4

const student = {
    name: "Saad",
    age: 50,
    grade: [80,85,89,95],
}

const student1 = {

    name: "Saad",
    age: 50,
    grade: [80,85,89,95],
    calulateAverageGrade : function (...number) 
    {
        for(let i=0; i<number.length; i++)
        {
            number+=number;

        }
        return (number)/number.length; 
    }

};


const givenArray = [5,12,8,130,44];

console.log(Math.max(...givenArray)); 