const button = document.getElementById("btn");
console.dir(button);

const button1 = document.getElementById("btn1");
console.dir(button1);

function traditionalFn() {
    console.log("Traditional function called");
}
function nameee() {
    console.log("hello my name is surya");
}
function loop() {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
}
function task() {
    console.log("Task done");
}

const arrowFn = () => {
    console.log("Arrow function called");
};


traditionalFn();



button.addEventListener("click", function (e) {
    console.log("button clicked");
    nameee();
    loop();
    task();



})


button1.addEventListener("click", function (e) {
    console.log("surya");
    arrowFn();
})


const input = document.getElementById("inputBox");

const submit =  document.getElementById("submit");
const out = document.getElementById("output");

submit.addEventListener("click", (e) =>

{
    console.log("input value:",input.value)
})
