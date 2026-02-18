// Interactive functionality for Mazda CX-60 landing page

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const modal = document.getElementById("videoModal");
  const closeModal = document.getElementById("closeModal");
  const videoFrame = document.getElementById("videoFrame");

  // Mazda CX-60 promotional video URL (using a placeholder - replace with actual Mazda video)
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";

  // Open video modal
  playButton.addEventListener("click", function () {
    modal.classList.add("show");
    videoFrame.src = videoUrl;
    document.body.style.overflow = "hidden";
  });

  // Close modal function
  function closeVideoModal() {
    modal.classList.remove("show");
    setTimeout(() => {
      videoFrame.src = "";
      document.body.style.overflow = "auto";
    }, 300);
  }

  // Close modal on button click
  closeModal.addEventListener("click", closeVideoModal);

  // Close modal on background click
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeVideoModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeVideoModal();
    }
  });

  // Smooth parallax effect on mouse move (subtle)
  const car = document.querySelector(".element-homura-plus");
  let mouseX = 0;
  let mouseY = 0;
  let carX = 0;
  let carY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
  });

  function animateParallax() {
    carX += (mouseX - carX) * 0.05;
    carY += (mouseY - carY) * 0.05;

    if (car && window.innerWidth > 768) {
      car.style.transform = `translate(calc(-50% + ${carX}px), calc(-50% + ${carY}px))`;
    }

    requestAnimationFrame(animateParallax);
  }

  animateParallax();
  // Add click handler to protection/insurance image
  const protectionImg = document.querySelector(".PROTECCION-y-SEGUROS");
  protectionImg.addEventListener("click", function () {
    // In a real implementation, this would navigate to insurance/protection page
    console.log("Navigate to protection and insurance page");
  });

  // Add keyboard accessibility
  protectionImg.setAttribute("tabindex", "0");
  protectionImg.setAttribute("role", "button");
  protectionImg.setAttribute("aria-label", "Ver protección y seguros");

  protectionImg.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      protectionImg.click();
    }
  });
});
