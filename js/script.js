const headerEl = document.querySelector(".header")
const hamburgerEl = document.querySelector(".header__hamburger")

hamburgerEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open")
})
