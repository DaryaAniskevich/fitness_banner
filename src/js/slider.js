const cards = document.querySelectorAll(".slider-card");
const sliderItemsBlock = document.querySelector(".slider-wrapper");

let count = 0;
let width;

const rollSlider = (count) => {
  sliderItemsBlock.style.transform = `translate(-${count * width}px)`;
};

const calculateSliderWidth = () => {
  width = document.querySelector(".slider").offsetWidth;
  sliderItemsBlock.style.width = width * cards.length + "px";
  cards.forEach((card) => {
    card.style.maxWidth = 960 + "px";
    card.style.width = width + "px";
  });
};

const calculateWidth = (size) => {
  sliderItemsBlock.style.width = "100%";
  cards.forEach((card) => {
    card.style.maxWidth = size + "px";
    card.style.width = "100%";
  });
};

const changeActivePaginationItem = () => {
  paginationItem.forEach((item) => {
    if (item.id == count) {
      item.classList.add("slider-pagination__item_active");
    } else {
      item.classList.remove("slider-pagination__item_active");
    }
  });
};

if (
  document.documentElement.clientWidth >= 768 &&
  document.documentElement.clientWidth < 1024
) {
  calculateSliderWidth();
}

window.addEventListener("resize", () => {
  if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1024
  ) {
    calculateSliderWidth();
  } else if (document.documentElement.clientWidth >= 1024) {
    calculateWidth(390);
    rollSlider(0);
  } else if (document.documentElement.clientWidth < 768) {
    calculateWidth(960);
    rollSlider(0);
  }
});

nextBtn.addEventListener("click", () => {
  count++;
  if (count >= cards.length) {
    count = 0;
  }
  changeActivePaginationItem();
  rollSlider(count);
});

prevBtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = cards.length - 1;
  }
  changeActivePaginationItem();
  rollSlider(count);
});

paginationBlock.addEventListener("click", (event) => {
  if (event.target.classList.contains("slider-pagination__item")) {
    paginationItem.forEach((item) => {
      if (event.target.id == item.id) {
        count = item.id;
        item.classList.add("slider-pagination__item_active");
      } else {
        item.classList.remove("slider-pagination__item_active");
      }
    });
    rollSlider(count);
  }
});
