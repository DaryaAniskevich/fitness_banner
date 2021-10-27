const tariffBlocks = document.querySelectorAll(".tariff-block");
const tariffItems = document.querySelectorAll(".tariff-item");
const continueBtn = document.querySelector(".tariff__button");
let choosenTariff = "";

tariffBlocks.forEach((tariff) => {
  tariff.addEventListener("click", () => {
    choosenTariff = tariff.dataset.href;
    tariffItems.forEach((item) => {
      item.classList.remove("active");
      item.parentNode == tariff ? item.classList.add("active") : null;
    });
  });
});

continueBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (choosenTariff) {
    window.open(choosenTariff);
  }
});
