let selector = document.getElementById("contrast");
let root = document.querySelector(":root");

selector.addEventListener("click", function () {
    root.classList.toggle("theme-dark");
    root.classList.toggle("theme-light");
});
