// Question-1--How to compare two JSON have the same properties without order?

// a.var obj1={name:"person 1",age:5};
// b.var obj2={age:5,name:"person 1"};



const k1 = {name:"person 1",age:5 };
const k2 = { age:5,name:"person 1" };


JSON.stringify(k1) === JSON.stringify(k2); 


console.log(k1,k2); 