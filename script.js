const tabs = document.querySelectorAll(".tab-btn"),
  contents = document.querySelectorAll(".content");

// Выделение при клике на элемент
tabs.forEach((tab, index) => {
  // Tab Treatment
  tab.addEventListener("click", () => {
    tabs.forEach((elem) => {
      elem.classList.remove("active");
    });
    tab.classList.add("active");

    // Content Treatment
    contents.forEach((elem) => {
      elem.classList.remove("active");
    });
    contents[index].classList.add("active");
  });
});

// Выделение при наведении на элемент
// tabs.forEach(tab => {
//   tab.addEventListener('mouseover', () => {
//     tab.classList.add('hovered');
//   });
// });

// tabs.forEach(tab => {
//   tab.addEventListener('mouseout', () => {
//     tab.classList.remove('hovered');
//   });
// });
