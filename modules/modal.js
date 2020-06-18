function showMod(modalSelector, modalTimerId) {
  const modalP = document.querySelector(modalSelector);
  modalP.style.display = "block";
  document.body.style.overflow = "hidden";

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeMod(modalSelector) {
  const modalP = document.querySelector(modalSelector);
  modalP.style.display = "none";
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  // modal
  const modalTrigger = document.querySelectorAll(triggerSelector),
        modalP = document.querySelector(modalSelector);
    
  modalTrigger.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      showMod(modalSelector, modalTimerId);
    });
  });

  modalP.addEventListener("click", (e) => {  // close area without modal or with cross
    const target = e.target;
        
    if (target && (target == modalP || target.getAttribute("data-close") == "")) {
      closeMod(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {  // close Escape
    if (e.code === "Escape" && modalP.style.display === "block") {
      closeMod(modalSelector);
    }
  });

  function showByScroll() {  // once at and of page
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showMod(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showByScroll);
    }
  }

  window.addEventListener("scroll", showByScroll);
}

export default modal;
export {showMod, closeMod};
