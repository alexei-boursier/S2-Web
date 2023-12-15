window.addEventListener("DOMContentLoaded", function () {
  let allTabs = document.querySelectorAll("nav > div");

  for (const tab of allTabs) {
    tab.addEventListener("click", function () {
      for (const disable of allTabs) {
        disable.classList.remove("active");
      }

      tab.classList.add("active");
    });
  }
});
