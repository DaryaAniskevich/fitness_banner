const sliderCards = document.querySelectorAll(".slider-card");
const sliderWrapper = document.querySelector(".slider-wrapper");

let count = 0;
let width = 0;

const rollSlider = (count) => {
  width = sliderCards[0].offsetWidth;
  if (count === 0) {
    sliderWrapper.style.transform = `translateX(20px)`;
  } else {
    sliderWrapper.style.transform = `translateX(-${
      width * count - (20 - 5 * count)
    }px)`;
  }
};

sliderWrapper.addEventListener("touchstart", handleTouchStart, false);
sliderWrapper.addEventListener("touchmove", handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    clearInterval(autoSlider);
    if (xDiff > 0) {
      count--;
      if (count <= 0) {
        count = 0;
      }
    } else {
      count++;
      if (count >= sliderCards.length) {
        count = 0;
      }
    }

    rollSlider(count);
  }
  x1 = null;
  y1 = null;

  return;
}

const autoSlider = setInterval(() => {
  count++;
  if (count >= sliderCards.length) {
    count = 0;
  }
  rollSlider(count);
}, 5000);
