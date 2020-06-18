import {showMod, closeMod} from "./modal";
import {postData} from "../services/services";

function forms(formSelector, modalTimerId) {
  // forms
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading : "img/form/spinner.svg",
    success : "Takk! Vi tar kontakt snart!",
    failure : "Noen feil oppdaget..."
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.setAttribute("src", message.loading);  // or statusMessage.src = ..
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      
      postData("http://localhost:3000/requests", json)
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.style.display = "none";
    showMod(".modal", modalTimerId);  // from block "modal"
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;
    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.style.display = "block";
      closeMod(".modal");  // from block "modal"
    }, 3000);
  }
}

export default forms;
