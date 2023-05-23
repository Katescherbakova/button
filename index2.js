const openModalButtonElement = document.querySelector('#open-modal-button');
const closeModalButtonElement = document.querySelector('#close-modal-button');
const modalOverlayElement = document.querySelector('#modal-overlay');

const openModal = () => modalOverlayElement.style.display = 'flex';
const closeModal = () => modalOverlayElement.style.display = 'none';

openModalButtonElement.addEventListener('click', () => {
    openModal();
});

closeModalButtonElement.addEventListener('click', () => {
    closeModal();
});

modalOverlayElement.addEventListener('click', (event) => {
    if (event.target.id === "modal-overlay") {
        closeModal();
    }
});