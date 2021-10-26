const showAllBtn = document.querySelector(".section__button_more");
const cardItems = document.querySelectorAll(".section__item");

showAllBtn.addEventListener("click", () => {
  cardItems.forEach((card) => (card.style.display = "block"));
  showAllBtn.style.display = "none";
});
