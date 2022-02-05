let balao = document.getElementById("balao");
let button = document.getElementById("button-share");

button.addEventListener("click", () => {
  let displayBalao = balao.style.display;
  displayBalao === "none"
    ? (balao.style.display = "flex")
    : (balao.style.display = "none");
});
