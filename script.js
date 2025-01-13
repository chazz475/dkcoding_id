let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slide index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
  alert("anda klik saya??");
});
