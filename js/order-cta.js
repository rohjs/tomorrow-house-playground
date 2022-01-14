const orderCta = document.querySelector('.order-cta')
// const orderCtaChildren = orderCta.children
// const orderCtaBookmarkButton = orderCtaChildren[0]
// const orderCtaModalButton = orderCtaChildren[1]
const [orderCtaBookmarkButton, orderCtaModalButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaModalButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  const isBookmarkActive = this.classList.contains('is-active')
  const [icon, span] = this.children
  const count = parseInt(span.innerHTML.replace(',', ''), 10)

  let newCount = ''
  let newIconClassName = ''

  if (isBookmarkActive) {
    newCount = (count - 1).toLocaleString()
    newIconClassName = 'ic-bookmark'
  } else {
    newCount = (count + 1).toLocaleString()
    newIconClassName = 'ic-bookmark-filled'
  }

  icon.setAttribute('class', newIconClassName)
  span.innerHTML = newCount
  span.setAttribute('aria-label', `북마크 ${newCount}회`)

  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
