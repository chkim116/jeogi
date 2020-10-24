const nav = document.querySelector("#nav");
const searchBtn = document.querySelector(".nav__form-btn");
const searchInput = document.querySelector(".nav__form-input");
const searchClose = document.querySelector(".nav__form-close");

function handleScroll() {
  const height = nav.getBoundingClientRect().height;
  if (scrollY > height) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

function handleSearch() {
  const search = document.querySelector(".search");
  if (search) {
    return;
  }
  searchInput.classList.add("search");
  searchBtn.classList.add("left");
  searchClose.classList.add("search");
  searchInput.focus();
}

function handleClose() {
  const search = document.querySelector(".search");
  if (!search) {
    return;
  }
  searchInput.classList.remove("search");
  searchClose.classList.remove("search");
  searchBtn.classList.remove("left");
}

window.addEventListener("scroll", handleScroll);
searchBtn.addEventListener("click", handleSearch);
searchClose.addEventListener("click", handleClose);

// slide

const slider = document.querySelector(".event__slider-slide:first-child");
const sliderDot = document.querySelector(".slider-dot:first-child");

function nextDot() {
  if (sliderDot) {
    const currentDot = document.querySelector(".active");
    const nextDot = currentDot.nextElementSibling;

    if (nextDot) {
      currentDot.classList.remove("active");
      nextDot.classList.add("active");
    }
    if (!nextDot) {
      currentDot.classList.remove("active");
      sliderDot.classList.add("active");
    }
  } else {
    sliderDot.classList.add("active");
  }
}

function nextSlide() {
  if (slider) {
    const currentSlider = document.querySelector(".showing");
    const nextSlider = currentSlider.nextElementSibling;

    if (nextSlider) {
      currentSlider.classList.remove("showing");
      nextSlider.classList.add("showing");
    }
    if (!nextSlider) {
      currentSlider.classList.remove("showing");
      slider.classList.add("showing");
    }
  } else {
    slider.classList.add("showing");
  }
}

setInterval(nextSlide, 4500);
setInterval(nextDot, 4500);

// dot click

const sliderList = document.querySelectorAll(".event__slider-slide");
const sliderDotBtn = document.querySelectorAll(".slider-dot");

function handleSlider(e) {
  const { dot } = e.target.dataset;
  const currentSlider = document.querySelector(".showing");
  const currentDot = document.querySelector(".active");

  if (currentSlider && currentDot) {
    sliderList.forEach((slide) => {
      if (dot === slide.dataset.slide) {
        currentDot.classList.remove("active");
        currentSlider.classList.remove("showing");
        slide.classList.add("showing");
        e.target.classList.add("active");
      }
    });
  }
}

sliderDotBtn.forEach((btn) => btn.addEventListener("click", handleSlider));
