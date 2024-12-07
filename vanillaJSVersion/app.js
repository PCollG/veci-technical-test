document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#js-add");
  const modal = document.querySelector("#js-modal");
  const modalInput = modal.querySelector("input");
  const modalCancelButton = modal.querySelector("#js-modal-cancel");

  // Toggle modal visibility
  const toggleModal = () => {
    modal.classList.toggle("modalBg--visible");
    modalInput.value = "";
  };

  modalCancelButton.addEventListener("click", toggleModal);
  addButton.addEventListener("click", toggleModal);
});
