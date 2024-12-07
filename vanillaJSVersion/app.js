document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.querySelector(".list");
  const modal = document.querySelector("#js-modal");

  const addButton = document.querySelector("#js-add");
  const modalInput = modal.querySelector("input");
  const modalAddButton = modal.querySelector("#js-modal-add");
  const modalCancelButton = modal.querySelector("#js-modal-cancel");

  // Toggle modal visibility
  const toggleModal = () => {
    modal.classList.toggle("modalBg--visible");
    modalInput.value = "";
  };

  modalCancelButton.addEventListener("click", toggleModal);
  addButton.addEventListener("click", toggleModal);

  // Add item to the list
  const addItem = (text) => {
    const listItem = document.createElement("li");
    listItem.classList.add("listItem");
    listItem.textContent = text;

    listContainer.appendChild(listItem);
  };

  modalAddButton.addEventListener("click", () => {
    const text = modalInput.value.trim();
    if (!text) {
      alert("Cannot add an empty item.");
      return;
    }

    addItem(text);
    toggleModal();
  });
});
