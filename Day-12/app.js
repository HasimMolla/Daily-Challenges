const trigger = document.querySelector("#trigger");
const modalWrapper = document.querySelector(".modal_wrapper");
const closeBtn = document.querySelector(".close");

trigger.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modalWrapper.addEventListener("click", (e) => {
  // if (e.target !== this) return;
  // console.log(e.target);
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

function openModal() {
  modalWrapper.classList.add("active");
}

function closeModal() {
  modalWrapper.classList.remove("active");
}
