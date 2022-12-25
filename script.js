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

// portfolio modals
// let buttons = document.querySelectorAll(".p-btn");
// let modals = document.querySelectorAll(".modal");
// let modalsContent = document.querySelectorAll(".modal-content");

// const showModal = (id) => {
//   let modal = document.getElementById(id);
//   modal.classList.add("visible");
// };

// const hideModal = () => {
//   modals.forEach((modal) => {
//     modal.classList.remove("visible");
//   });
// };

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     hideModal();
//     showModal(btn.dataset.modal);
//   });
// });

// modals.forEach((modal) => {
//   let close = modal.querySelector(".close");
//   close.addEventListener("click", hideModal);
// });

// popupmodal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio-btn")) {
    togglePortfolioPopup();
    // document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
    // console.log(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  //   document.body.classList.toggle("hide-scrolling");
  //   document.querySelector(".main").classList.toggle("fade-out");
}
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumb img"
  ).src;

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

// back to top button
const backToTopButton = document.querySelector(".arrow");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

document.addEventListener("scroll", () => {
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  if (scrollContainer().scrollTop > 800) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);
