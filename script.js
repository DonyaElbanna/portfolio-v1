// About Tabs
const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.getElementById("about");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// popupmodal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio-btn")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
    // console.log(e.target.parentElement);
    showSlides();
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
}
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-content-title").innerHTML;

  document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".modal-content").innerHTML;
}

// To hide popup when clicked outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

// slider
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.querySelectorAll("#pp-body .slide");

  slides[1].style.display = "block";
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[slideIndex - 1].style.display = "block";
  }
}