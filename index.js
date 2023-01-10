const resetButton = document.querySelector(".reset-animation");
const maskedImage = document.querySelector(".color-image");
const maskedContainer = document.querySelector(".mask-container");
const coloredTop = document.getElementById("coloredTop");
const coloredBottom = document.getElementById("color-image");
const enterShield = document.getElementById("enterShield");
const enterBox = document.getElementById("enter-box");
const mobileMenuBox = document.getElementById("mobile-menu-box");
const linkButtonQuery = document.querySelectorAll(".link-buttons");
const linkButtonArray = [...linkButtonQuery];
const lettersOfNameQuery = document.querySelectorAll(".name");
const lettersOfNameArray = [...lettersOfNameQuery];

console.log(linkButtonQuery);
console.log(linkButtonArray);

const dropInMenuLinks = () => {
  lettersOfNameArray.map((letter) => {
    letter.classList.toggle("blurred");
  });

  linkButtonArray.map((linkBox) => {
    console.log(linkBox);
    linkBox.classList.toggle("linked-up");
  });
};

const introducing = () => {
  maskedImage.classList.remove("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 250);
  setTimeout(() => {
    maskedContainer.classList.add("slide-framer-left");
  }, 250);
  setTimeout(() => {
    coloredTop.classList.add("visible");
    coloredBottom.classList.add("hidden");
  }, 12000);
  setTimeout(() => {}, 2500);
};

const dropIn = () => {
  console.log("dropping in");
};

const callMenu = () => {
  console.log("mobile menu");
  dropInMenuLinks();
};

enterShield.addEventListener("transitionend", () => {
  enterShield.classList.add("toucheded");
  introducing();
});

mobileMenuBox.addEventListener("click", () => {
  callMenu();
});

enterBox.addEventListener("click", () => {
  enterShield.classList.add("touched");
});
