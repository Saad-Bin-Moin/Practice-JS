document.getElementById("id").innerHTML = 'Software Engineer at Google';


let d = new Date();
d = d.getFullYear();
document.getElementById("idd").innerHTML = d;


// Class - Constructor - method

// class ClassName {
//     constructor() {
        
//     }
//     method_1() {};
//     method_2() {};
// }

class Car{
    
    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
       return x - this.year;
        
    }

}

const date = new Date();
let year = date.getFullYear();

const myCarAge = new Car ('BMW', 2016);

document.getElementById("id3").innerHTML = 'The age of my Car ' + myCarAge.age(year) + ' Years';

