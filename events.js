let buttons = document.querySelectorAll("button:not(#remove,#eqaul)");
let input = document.querySelector(".input");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    updateInput(e.target);
  });
});

document.addEventListener("keydown", (e) => {
let text = input.textContent.split("");
  if (!isNaN(e.key)) {
    updateInput(e.key);
  } else if (e.key == "Backspace") {
    removeItem();
  } else if ((e.key == "=" || e.key == "Enter") && !(text[text.length - 1] == " ")) {
    result();
  } else if (e.key == "+") {
    updateInput("+");
  } else if (e.key == "-") {
    updateInput("–");
  } else if (e.key == "/") {
    updateInput("÷");
  } else if (e.key == "*") {
    updateInput("×");
  } else if (e.key == "%") {
    updateInput("MOD");
  } else if (e.key == "a" || e.key == "A") {
    updateInput("Ans");
  } else if (e.key == "h" || e.key == 'H') {
    hisDiv.classList.toggle('active');
  } else if (e.key == "." || e.key == ",") {
    updateInput(".");
  }
});

let remove = document.querySelector("#remove");

remove.addEventListener("click", (e) => {
  removeItem();
});

let eqaul = document.querySelector("#eqaul");
document.addEventListener('click', (e) => {
  if (!e.target.closest('.hisDiv') && !e.target.closest('.hisBtn')) {
    hisDiv.classList.remove('active');
  }
});
eqaul.addEventListener("click", () => {
  let text = input.textContent.split("");
  if (!(text[text.length - 1] == " "))  result();
});

let hisBtn = document.querySelector('.hisBtn');

hisBtn.addEventListener('click',(e)=>{
  hisDiv.classList.toggle('active');
})
let exepessions = document.querySelectorAll('td button');

exepessions.forEach(button => {
  button.addEventListener('click',(e)=>{
    input.textContent = e.target.textContent
  })
})
