const resetButton = document.querySelector(".reset-animation");
const maskedImage = document.querySelector(".color-image");
const maskedContainer = document.querySelector(".mask-container");
const coloredTop = document.getElementById("coloredTop");
const coloredBottom = document.getElementById("color-image");
const enterShield = document.getElementById("enterShield");
const enterBox = document.getElementById("enter-box");

enterShield.addEventListener("transitionend", () => {
  introducing;
});

enterBox.addEventListener("click", () => {
  enterShield.classList.add("touched");
});

const introducing = () => {
  maskedImage.classList.remove("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 100);
  setTimeout(() => {
    maskedContainer.classList.add("slide-framer-left");
  }, 250);
  setTimeout(() => {
    coloredTop.classList.add("visible");
    coloredBottom.classList.add("hidden");
  }, 1200);
  setTimeout(() => {}, 2500);
};

const dropIn = () => {
  console.log("dropping in");
};
