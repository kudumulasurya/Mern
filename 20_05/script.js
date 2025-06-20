const output = document.getElementById("output");
const input = document.getElementById("input");
const start = document.getElementById("start");

start.addEventListener("click", () => {
  const value = input.value;

  if (value === "") return;

  const newItem = document.createElement("p");
  newItem.innerText = value;

  output.appendChild(newItem);
  input.value = ""; 
});
