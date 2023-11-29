// create an array of image
const imgArr = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3293854/pexels-photo-3293854.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/590134/pexels-photo-590134.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1314186/pexels-photo-1314186.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1122626/pexels-photo-1122626.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/3800363/pexels-photo-3800363.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/14371564/pexels-photo-14371564.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/788655/pexels-photo-788655.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/45851/bird-blue-cristata-cyanocitta-45851.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/14934612/pexels-photo-14934612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/1893158/pexels-photo-1893158.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/9314222/pexels-photo-9314222.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 17,
    src: "https://images.pexels.com/photos/925263/pexels-photo-925263.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 18,
    src: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

let addImg = "";
imgArr.forEach(function (elem, index) {
  addImg += `<img id ="${index}" src="${elem.src}" alt="${elem.id}"/>`;
});
// console.log(addImg);

const gallery = document.querySelector(".gallery");
gallery.innerHTML = addImg;

// image view section

const galleryImg = document.querySelectorAll(".gallery img");
const imageView = document.querySelector(".image_view");
const exit = document.querySelector(".exit");
const openImg = document.querySelector(".openImg");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

galleryImg.forEach((img, index) => {
  img.addEventListener("click", () => {
      // console.log('clicked');
      openImg.src = img.src;

    let currentImage = index;
    let nextImage = currentImage + 1;
    let prevImage = currentImage - 1;

      window.addEventListener("keyup", (e) => {
          e.preventDefault();
      if (nextImage >= imgArr.length) {
        nextImage = 0;
      }

      if (prevImage <= 0) {
        prevImage = imgArr.length - 1;
      }

      if (e.key === "ArrowLeft") {
        openImg.src = imgArr[prevImage].src;
        prevImage--;
        nextImage = prevImage + 2;
      } else if (e.key === "ArrowRight") {
        openImg.src = imgArr[nextImage].src;
        nextImage++;
        prevImage = nextImage - 2;
      } else if ((e.key = "Escape")) {
        imageView.classList.remove("active");
      }
    });

    prevBtn.addEventListener("click", () => {
      if (prevImage <= 0) {
        prevImage = imgArr.length - 1;
      }

      openImg.src = imgArr[prevImage].src;
      prevImage--;
      nextImage = prevImage + 2;
    });

    nextBtn.addEventListener("click", () => {
      if (nextImage >= imgArr.length) {
        nextImage = 0;
      }

      openImg.src = imgArr[nextImage].src;
      nextImage++;
      prevImage = nextImage - 2;
    });

    //    closeBtn.addEventListener("click", () => {
    //      modal.classList.remove("active");
    //    });
  });
});

gallery.addEventListener("click", (e, index) => {
  // console.log(e.src);
  imageView.style.display = "block";
});

exit.addEventListener("click", () => {
  imageView.style.display = "none";
  // imageView.style.transition = "all 0.5s linear";

  console.log("hi");
});
