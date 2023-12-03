const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // INFO: we block default form action here

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = ` Please give a valid height💪 ${height}`;
  }

  // results.innerHTML = `${height}`;
  else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = ` Please give a valid weight🏋️ ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // display bmi in result

    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML = `<span> ${bmi} Under Weight 🍕 </span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = ` <span>${bmi} Normal Range 🧠</span>`;
    } else {
      results.innerHTML = `<span> ${bmi} Overweight 🍔</span>`;
    }
  }
});
