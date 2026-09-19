

let a = "this is a websites";
//                   mandatory value
console.log(a.indexOf("Web"));
//                           optional value DEFAULT VALUE 0 INDEX
console.log(a.indexOf("Web") , 10); // start searching from index 7 and IF ITS NOT FOUNT IT RETURN -1

console.log(a.lastIndexOf("a"));// start searching from the end to the start from left


console.log(a.indexOf("s"));
console.log(a.lastIndexOf("s"));

//                 start from which index
console.log(a.slice(0))
//              end not included
console.log(a.slice(10, 18 ));

console.log(a.slice(1, 4 ));

console.log(a.slice(-2));
console.log(a.slice(-3));
console.log(a.slice(-8 , -1));



console.log(a.repeat(5));

console.log(a.split()); // return array

//                 separator
console.log(a.split(""));

//                 start split from each space
console.log(a.split(" "));


let b = "this|this|this|this";
//                   | pipeline
console.log(b.split("|"));
//                      we give limit cut only 2
console.log(b.split("|", 2));
//                  letters
console.log(b.split("", 2));
