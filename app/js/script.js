const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const headerMovie = document.querySelector(".header__mobile");

function menuOpener() {
  headerMovie.classList.toggle("active");
}

const directorDescriptions = document.querySelectorAll(
  ".director__description"
);
const directorButtons = document.querySelectorAll(".director button");
const btnsIcon = document.querySelectorAll(".director button i");

directorButtons.forEach((item, index) =>
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    btnsIcon[index].classList.toggle("active");
    directorDescriptions[index].classList.toggle("active");
  })
);
