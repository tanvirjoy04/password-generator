//lowercase letters, Uppercase letters, numbers and symbols

const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '~`!@#$%^&*()_-+={[}]|\:;"' + "<,>.?/";
let text = lowerCaseLetters + upperCaseLetters + numbers + symbols;

let final = text.split("");
// console.log(final);

// console.log(final.length);

function key(){
  let firstPass = "";
  for(let i = 0; i < 15; i++){
    firstPass += final[Math.floor(Math.random() * 92)];
  }
  document.getElementById("button1").textContent = firstPass;

  let secondPass = "";
  for(let i = 0; i < 15; i++){
    secondPass += final[Math.floor(Math.random() * 92)];
  }
  document.getElementById("button2").textContent = secondPass;

 let thirdPass = "";
  for(let i = 0; i < 15; i++){
    thirdPass += final[Math.floor(Math.random() * 92)];
  }
  document.getElementById("button3").textContent = thirdPass;

  let fourthPass = "";
  for(let i = 0; i < 15; i++){
    fourthPass += final[Math.floor(Math.random() * 92)];
  }
  document.getElementById("button4").textContent = fourthPass;
  
}
