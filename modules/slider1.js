function slider1() {
  // slider part 1 (not used)
  const prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        currentSlide = document.querySelector("#current"),
        totalSlides = document.querySelector("#total"),
        slides = document.querySelectorAll(".offer__slide"),
        length = slides.length;

  totalSlides.textContent = length.toString().padStart(2,0);

  function showSlide(index = 0) {
    currentSlide.textContent = (index + 1).toString().padStart(2,0);
    
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  showSlide();

  prev.addEventListener("click", (e) => {
    let current = +currentSlide.textContent;
    let ind;
        
    if (--current !== 0) {
      ind = --current;
    } else {
      ind = length - 1;
    }
    
    showSlide(ind);
  });

  next.addEventListener("click", (e) => {
    const current = +currentSlide.textContent;
    let ind;
    
    if (current !== length) {
      ind = current;
    } else {
      ind = 0;
    }
    
    showSlide(ind);
  });
}

// export default slider1;
