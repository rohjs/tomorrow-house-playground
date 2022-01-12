const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')
const menuButton = document.querySelector('.gnb-icon-button.is-menu')

function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

menuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)
