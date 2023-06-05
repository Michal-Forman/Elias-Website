const image = document.getElementById("myImage");

image.addEventListener("click", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.transform = "scale(0.4) translateX(500px) translateY(500px)";

  setTimeout(() => {
    this.style.transition = "";
    this.style.transform = "";
  }, 3000);
});

const image2 = document.getElementById("myImage2");

image2.addEventListener("click", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.transform = "scale(0.4) translateX(500px) translateY(500px)";

  setTimeout(() => {
    this.style.transition = "";
    this.style.transform = "";
  }, 3000);
});

const image3 = document.getElementById("myImage3");

image3.addEventListener("click", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.transform = "scale(0.4) translateX(500px) translateY(500px)";

  setTimeout(() => {
    this.style.transition = "";
    this.style.transform = "";
  }, 3000);
});