const resetButton = document.querySelector(".reset-animation");
const maskedImage = document.querySelector(".color-image");
const maskedContainer = document.querySelector(".mask-container");
const coloredTop = document.getElementById("coloredTop");

resetButton.addEventListener("click", () => {
  maskedImage.classList.remove("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 100);

  setTimeout(() => maskedContainer.classList.add("slide-framer-left"), 1750);
  setTimeout(() => coloredTop.classList.add("visible"), 1500);
});
