let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Heandel model overlode
const model = document.querySelector(".model");
const mainImg = document.querySelector(".mainEvent");
const subImg = document.querySelector(".subTourEvent");
const img = document.querySelector(".modelContainer img");

const mainModel = [
  {
    id: 1,
    src: "./Home/img/banerdulich.png",
  },
  {
    id: 2,
    src: "./Home/img/subbaner1.png",
  },
  {
    id: 3,
    src: "./Home/img/subbaner2.png",
  },
];

console.log(mainImg);

mainImg.addEventListener("click", () => {
  img.src = mainModel[0].src;
  model.style.display = "block";
});

subImg.addEventListener("click", () => {
  img.src = mainModel[2].src;
  model.style.display = "block";
});

model.addEventListener("click", () => {
  model.style.display = "none";
});
