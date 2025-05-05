let bool = false;
let Ans = 0;
let histories = [];
console.log(Ans);

function updateInput(target) {
  let text = input.textContent.split("");
  let value =
    typeof target == "string" ? target.toString() : target.textContent;
  let cond = ["+", "–", "÷", "×", "MOD"].includes(value);
  if (cond) {
    bool = false;
  }
  if (input.textContent == "0" || bool == true) {
    input.textContent = "";
  } else {
    if (
      value == "Ans" &&
      (text[text.length - 1] == "s" || !isNaN(text[text.length - 1]) && text[text.length - 1] !== " ")
    ) {
      console.table(text);
      return;
    }
    if (!isNaN(value) && text[text.length - 1] == "s") {
      return;
    }
  }
  if (value == "." && (text[text.length - 1] == "." )) {
    return;
  }
  if (cond && text[text.length - 1] == ".") {
    input.textContent += "0"
  }
  if (text[text.length - 1] == " " && cond) {
    removeItem();
  }
  if (cond) {
    input.textContent += " " + value + " ";
  }
  if (!cond) {
    input.textContent += value;
  }

  if (
    input.textContent == " + " ||
    input.textContent == " – " ||
    input.textContent == " ÷ " ||
    input.textContent == " × " ||
    target.textContent == "CE" ||
    input.textContent == " MOD "
  ) {
    input.textContent = "0";
  }
  bool = false;
}
function removeItem() {
  let text = input.textContent.split("");
  if ([" "].includes(text[text.length - 1])) {
    if (text[text.length - 2] == "D") {
      text.splice(text.length - 5, 5);
    } else {
      text.splice(text.length - 3, 3);
    }
  } else if (text[text.length - 1] == "s") {
    text.splice(text.length - 3, 3);
  } else {
    text.splice(text.length - 1, 1);
  }

  input.textContent = text.join("");
  if (input.textContent == "") {
    input.textContent = "0";
  }
}
function result() {
  let text = input.textContent.split(" ");
  // console.table(text)
  let result = text[0] == "Ans" ? Ans : parseFloat(text[0]);
  for (let i = 1; i < text.length; i += 2) {
    let operator = text[i];
    let nextNumber = text[i + 1] == "Ans" ? Ans : parseFloat(text[i + 1]);
    if (operator === "+") {
      result += nextNumber;
    } else if (operator === "–") {
      result -= nextNumber;
    } else if (operator === "÷") {
      result /= nextNumber;
    } else if (operator === "×") {
      result *= nextNumber;
    } else if (operator === "MOD") {
      result %= nextNumber;
    }
  }
  histories.push({
    expe: input.textContent,
    result
  });
  input.textContent = result;
  Ans = result;
  bool = true;
  history();
}
let hisDiv = document.querySelector('.hisDiv');
function history() {

  hisDiv.innerHTML = '<h1>History</h1?';
  histories.forEach(history => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td ><button>${history.expe}</button></td>
    <td>=</td>
    <td><button>${history.result}</button></td>
    `;
    hisDiv.appendChild(tr)
  });
  let exepessions = document.querySelectorAll('td button');

exepessions.forEach(button => {
  button.addEventListener('click',(e)=>{
    input.textContent = e.target.textContent
  })
})
}
