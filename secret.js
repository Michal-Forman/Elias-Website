const image = document.getElementById("myImage");

image.addEventListener("click", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.transform = "scale(0.4) translateX(500px) translateY(500px)";

  setTimeout(() => {
    this.style.transition = "";
    this.style.transform = "";
  }, 3000);
});
