// *******************DAY 2**********************
// const button = document.getElementById("btn");

// console.dir(button);

// function tradationalFn() {
//     console.log("Traditional function called");
// }


// const arrowFn = () => {
//     console.log("Arrow function called");
// };


// tradationalFn();
// arrowFn();


// // Traditional FN EVENT CALL 
// // button.addEventListener("click", function() {
// //   console.log("Button clicked");
// // });

// // Arrow FN EVENT CALL
// button.addEventListener("click", () => {
//     console.log("Button clicked with arrow function");
//     loops();
//     printName();
//     done();
// });

// const loops = () => {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }

// const printName = () => {
//     console.log("My name is ......");
// }


// function done() {
//     console.log("Done");
// }


// // parent.addEventListener("click", function(e) {
// //   console.log("Parent clicked");
// // });


// const inputBox = document.getElementById("input");
// const submitButton = document.getElementById("submitBtn");

// const output = document.getElementById("output");


// submitButton.addEventListener("click", (e) => {
//     console.log("Input value:", inputBox.value);
//     output.innerText = inputBox.value;
// })

// console.dir(inputBox);


// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const input3 = document.getElementById("input3");
// const Output1 = document.getElementById("Output1");
// const Output2 = document.getElementById("Output2");
// const Output3 = document.getElementById("Output3");

// input1.addEventListener("input", () => {
//     Output1.innerText = "Input 1: " + input1.value;
// });

// input2.addEventListener("input", () => {
//     Output2.innerText = "Input 2: " + input2.value;
// });

// input3.addEventListener("input", () => {
//     Output3.innerText = "Input 3: " + input3.value;
// });


// *****DAY   3******************

// const changecolourbutton =document.getElementById("changecolourbutton");
// const colorBox =document.getElementById("colorBox");

// changecolourbutton.addEventListener("click", () =>{
//     const red = Math.round(Math.random() * 255);

//     const green = Math.round(Math.random() * 255);

//     const blue = Math.round(Math.random() * 255);

//     console.log(red,green,blue);
//     colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// })

const output = document.getElementById("output");
const input =  document.getElementById("input");
const check = document.getElementById("check");
const start = document.getElementById("start");

let newNumber =0;
start.addEventListener("click",()=>{
    
    console.log(input.value);
    
})
console.log(input)
check.addEventListener("click", ()=>{
    newNumber = Math.round(Math.random()*10);
    console.log(newNumber);
    if(newNumber==input.value)(
        console.log("win win win ")
    )

    
})
input.addEventListener("input", () => {
    output.innerText =  input.value;
});
