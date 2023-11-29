// INFO: Random color Generate

const btn = document.querySelector("#btn");

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

console.log(randomColor());

function changebgColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click',changebgColor)