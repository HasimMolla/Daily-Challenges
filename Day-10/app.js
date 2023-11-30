//select elements and assign them to variables

const form = document.querySelector("form");
const Btn = document.querySelector(".submit_btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const errorMesg = document.querySelector(".error_msg");

const romanObject = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

// form.addEventListener('submit', function (e) {
//      e.preventDefault();
//     const input = parseInt(document.querySelector(".input").value);
//     const output = document.querySelector(".output");
//     const errorMesg = document.querySelector(".error_msg");
//
//     if (input===''|| input<=0|| input>4000 ||isNaN(input)) {
//         errorMesg.innerHTML ='Please enter Roman numberals only!🤨'
//     }
// })

Btn.addEventListener("click", (e) => {
    e.preventDefault()
  inputToRoman(input.value);
    input.value = "";
    console.log('hi');
});

function inputToRoman(num) {
  let Number = parseInt(num);
  if (num.trim().length === 0 || isNaN(Number)) {
    errorMesg.innerHTML = "Invalid Input!🤨";
    //   errorMesg.style.display = "flex";
    output.innerHTML = "";
    //   output.style.display ="flex"
    return false;
  }

  if (Number > 4000 || Number <= 0) {
      errorMesg.innerHTML = "Input out of Range!🤨";
    //   errorMesg.style.display = "flex";
      output.innerHTML = "";
    return false;
  }
    errorMesg.innerHTML = "Keep it up👍";
    output.innerHTML = "";
    
    let result = ""
    let romanValues = Object.keys(romanObject)
    romanValues.forEach((key) => {
        while (romanObject[key] <= Number) {
            Number -= romanObject[key];
            result += key;
        }
    })

    output.innerHTML = result;
}
