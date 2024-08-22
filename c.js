document.addEventListener('DOMContentLoaded', function () {
  let dropdownBtnText = document.getElementById("drop-text");
  let span = document.getElementById("span");
  let icon = document.getElementById("icon");
  let list = document.getElementById("list");
  let input = document.getElementById("search-input");
  let listItems = document.querySelectorAll(".dropdown-list-item");

  dropdownBtnText.onclick = function () {
    list.classList.toggle("show");
    icon.style.transform = list.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
  };

  window.onclick = function (e) {
    if (
      e.target.id !== "drop-text" &&
      e.target.id !== "icon" &&
      e.target.id !== "span"
    ) {
      list.classList.remove("show");
      icon.style.transform = "rotate(0deg)";
    }
  };

  listItems.forEach((item) => {
    item.onclick = function (e) {
      span.innerText = e.target.innerText;
      if (e.target.innerText == "Categories") {
        input.placeholder = "Search here...";
      } else {
        input.placeholder = "Search in " + e.target.innerText + "...";
      }
      list.classList.remove("show");
      icon.style.transform = "rotate(0deg)";
    };
  });
});
