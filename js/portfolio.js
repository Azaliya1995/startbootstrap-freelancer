;let a = document.querySelector("#fly");
let bird = document.querySelector("#bird");
a.onclick = (e) => {
    e.preventDefault();
  //bird.style.backgroundColor = "blue";
  bird.classList.toggle("fly");
}