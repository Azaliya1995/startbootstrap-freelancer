;
//var a = document.querySelector("#fly");
var bird = document.querySelector("#bird");
/*
a.onclick = function(e) {
    e.preventDefault();
  //bird.style.backgroundColor = "blue";
  bird.classList.toggle("fly");
}
*/

/*for overlay*/
var overlay = document.querySelector(".overlay");

var open = document.querySelectorAll(".open-popup")

open.forEach(elem => {
  elem.onclick = function(e) {
    e.preventDefault();
    var dataId = elem.getAttribute("data-id");
    var content = document.querySelector(`.content[data-id='${dataId}']`);
      var popup = document.querySelector(".popup");
      document.querySelector(".popup .content").innerHTML = content.innerHTML;
      popup.classList.add("show");
      overlay.style.display="block";
    }
});


  var close = document.querySelector(".close-popup");
close.onclick = function(e) {
e.preventDefault();
	var popup = document.querySelector(".popup");
  popup.classList.remove("show");
  overlay.style.display="none";
}
