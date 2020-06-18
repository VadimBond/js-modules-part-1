function slider({ container, slide, nextArrow, prevArrow, total, current, wrapper, field }) {
  // slider part 2 (carousel)
  const slider = document.querySelector(container),
        prev = slider.querySelector(prevArrow),
        next = slider.querySelector(nextArrow),
        currentSlide = slider.querySelector(current),
        totalSlides = slider.querySelector(total),
        slidesWrapper = slider.querySelector(wrapper),
        slidesField = slider.querySelector(field),
        widthWrapper = window.getComputedStyle(slidesWrapper).width,
        slides = slider.querySelectorAll(slide),
        length = slides.length;

  let slideIndex = 1,
      offset = 0;

  totalSlides.textContent = length.toString().padStart(2,0);
  currentSlide.textContent = slideIndex.toString().padStart(2,0);

  slidesField.style.cssText = `
    width: ${100 * length}%;
    display: flex;
    transition: 0.7s all;
  `;

  slidesWrapper.style.overflow = "hidden";
  
  slides.forEach(slide => slide.style.width = widthWrapper);

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
        dots = [];

  // or indicators.classList.add("carousel-indicators");
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  slider.append(indicators);

  for (let i = 0; i < length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;
    if (i == 0) {
      dot.style.opacity = "1";
    }
    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener("click", (e) => {
    if (slideIndex !== length) {
      slideIndex++;
    } else {
      slideIndex = 1;
    }

    currentSlide.textContent = slideIndex.toString().padStart(2,0);

    if (offset == parseFloat(widthWrapper) * (length - 1)) {
      offset = 0;
    } else {
      offset += parseFloat(widthWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    dots.forEach(dot => dot.style.opacity = ".5");
    dots[slideIndex - 1].style.opacity = "1";
  });

  prev.addEventListener("click", (e) => {
    if (slideIndex !== 1) {
      slideIndex--;
    } else {
      slideIndex = length;
    }

    currentSlide.textContent = slideIndex.toString().padStart(2,0);

    if (offset == 0) {
      offset = parseFloat(widthWrapper) * (length - 1);
    } else {
      offset -= parseFloat(widthWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    dots.forEach(dot => dot.style.opacity = ".5");
    dots[slideIndex - 1].style.opacity = "1";
  });

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;

      offset = parseFloat(widthWrapper) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      currentSlide.textContent = slideIndex.toString().padStart(2,0);

      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex - 1].style.opacity = "1";
    });
  });
}

export default slider;
