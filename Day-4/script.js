document.querySelector("#toggle").addEventListener("click", () => {
  const toggleBtn = document.querySelector("#toggle");
  if (toggleBtn.checked) {
    document.body.style.backgroundColor = "#000000";
    document.body.style.transition = "all 0.3s linear";
    document.querySelector(".text").style.color = "#ffffff";
    document.querySelector(".text").style.transition = "all 0.3s linear";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.transition = "all 0.3s linear";
    document.querySelector(".text").style.color = "#000000";
    document.querySelector(".text").style.transition = "all 0.3s linear";
  }
});
