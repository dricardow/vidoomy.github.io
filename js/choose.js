document.addEventListener("DOMContentLoaded", function () {
  const versionLinks = document.querySelectorAll(".version-link");
  const carImage = document.querySelector(".choose-car");

  if (!carImage || versionLinks.length === 0) {
    return;
  }

  const defaultImage = carImage.dataset.defaultSrc || carImage.getAttribute("src");

  const setActiveLink = (link) => {
    versionLinks.forEach((item) => item.classList.toggle("active", item === link));
  };

  const updateCarImage = (src) => {
    if (!src) {
      carImage.src = defaultImage;
      return;
    }

    if (carImage.src === src) {
      return;
    }

    carImage.src = src;
  };

  versionLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      setActiveLink(link);

      const targetImage = link.dataset.image;
      updateCarImage(targetImage);
    });
  });
});
