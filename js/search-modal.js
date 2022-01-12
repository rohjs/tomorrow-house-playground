const searchModal = document.querySelector('.search-modal')
const searchModalOverlay = document.querySelector('.overlay')
const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModalCloseButton = searchModal.querySelector('.btn-ghost')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchModalOverlay.classList.add('is-active')
}

searchButton.addEventListener('click', openSearchModal)

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchModalOverlay.classList.remove('is-active')
}

searchModalCloseButton.addEventListener('click', closeSearchModal)
