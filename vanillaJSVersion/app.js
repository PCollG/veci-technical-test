document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.querySelector(".list");
  const modal = document.querySelector("#js-modal");

  const deleteButton = document.querySelector("#js-delete");
  const addButton = document.querySelector("#js-add");

  const modalInput = modal.querySelector("input");
  const modalAddButton = modal.querySelector("#js-modal-add");
  const modalCancelButton = modal.querySelector("#js-modal-cancel");

  let selectedItems = new Set();

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

    // Toggle selection on click
    listItem.addEventListener("click", () => {
      if (listItem.classList.contains("listItem--selected")) {
        listItem.classList.remove("listItem--selected");
        selectedItems.delete(listItem);
      } else {
        listItem.classList.add("listItem--selected");
        selectedItems.add(listItem);
      }
    });

    // Remove item on double click
    listItem.addEventListener("dblclick", () => {
      listItem.remove();
    });

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

  // Delete selected items
  const deleteItems = () => {
    if (selectedItems.size === 0) {
      alert("Please select at least one item to delete.");
      return;
    }

    selectedItems.forEach((item) => item.remove());
    selectedItems.clear();
  };

  deleteButton.addEventListener("click", deleteItems);
});
