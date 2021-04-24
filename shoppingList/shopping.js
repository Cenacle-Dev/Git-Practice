const list = document.querySelector(".list");
const input = document.querySelector("input");

let inputText = "";

input.addEventListener("input", event => {
  inputText = input.value;
});

window.addEventListener("keydown", event => {
  if (event.keyCode == 13) {
    console.log(inputText);
    list.appendChild(document.createTextNode(inputText));
    input.value = "";
  }
});
