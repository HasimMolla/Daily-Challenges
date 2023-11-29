// document.addEventListener("DOMContentLoaded", function () {
//   const audio = new Audio("arabic_music.mp3");
//
//   const button = document.getElementById("btn");
//
//   button.addEventListener("click", function () {
//     if (audio.paused) {
//       audio.play();
//       button.innerHTML = "Pause";
//     } else {
//       audio.pause();
//       audio.currentTime = 0;
//       button.innerHTML = "Play";
//     }
//   });
// });

const audio = new Audio()
audio.src = "./arabic_music.mp3";
const button = document.getElementById("btn");
button.addEventListener('click', function () {
    audio.play();
    audio.loop = true;
})
