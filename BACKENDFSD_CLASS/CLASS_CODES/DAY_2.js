// function hello(){
//     console.log("Task 1");
// }
//hello();
//console.log("Task 2");

//Synchronous blocking js and Asynchronous non-blocking js
//Synchronous: One by one execution
//Asynchronous: Multiple execution at a time

// console.log("Task 3");


// function hello(){
//     console.log("Task 1");
//     setTimeout(function(){
//         console.log("Task 2");
//         console.log("Task 4");
//     }, 2000);
// }
// hello();
// console.log("Task 3");



function hello(n1, n2){
    console.log("Task 1");
    return n1+n2;
}
console.log(hello(5, 10));

function hi(){
    console.log("Say hi");
}
hi();

//by using callback function
//callback wo function hoti hai jo kisi dusre function ke andar as a parameter pass ki jati hai
function hello(n1, n2, callback){//instead of callback u can use cb
    console.log("Task 1");
    return callback(n1+n2);
}

