console.log("cześć");

let button = document.querySelector(".button");
let button2 = document.querySelector(".button2");
let image = document.querySelector(".image");
let whitesmokeBackground = document.querySelector(".whitesmokeBackground");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
  image.classList.toggle("hidden");
  if (image.classList.contains("hidden")) {
    button.innerText = "Ukryj/Pokaż zdjęcie";
  }
});

button2.addEventListener("click", () => {
  body.classList.toggle("whitesmokeBackground");
});
