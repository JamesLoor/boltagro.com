AOS.init();

const menu = document.getElementById('menu')
const menuOpen = document.getElementById('menu-icon-open')
const menuClose = document.getElementById('menu-icon-close')
const links = document.querySelectorAll('#menu a')


menuOpen.addEventListener('click', () => {
  menu.classList.toggle('active')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('active')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
})

const accordionItems = document.querySelectorAll('.accordion .accordion-item')

accordionItems.forEach(item => {
  let button = item.querySelector('button')
  let text = item.querySelector('.answer')
  button.addEventListener('click', () => {
    deactiveAccordionItem()
    text.classList.add('active')
    button.classList.add('active')
  })
})

function deactiveAccordionItem() {
  accordionItems.forEach(item => {
    let tagText = item.querySelector('.answer')
    let button = item.querySelector('button')
    tagText.classList.remove('active')
    button.classList.remove('active')
  })
}

const $form = document.getElementById("contact-form-id")

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()

  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })

  if(response.ok) {
    this.reset()
    alert('¡Gracias por contactarnos!, En breve nos comunicaremos para responder su consulta.')
  } else {
    this.reset()
    alert('¡Hubo un problema al enviar el formulario!')
  }
}

const $modal = document.getElementById('modal-id')
const productButton = document.getElementsByClassName('product-button')

Array.from(productButton).forEach(button => {
  button.addEventListener('click', () => {
    let linkVideo = button.getAttribute('data-video')
    $modal.querySelector('video').setAttribute('src', linkVideo)
    $modal.classList.toggle('open-modal')
    document.querySelector('body').style.overflow = "hidden"
  })
})

$modal.addEventListener('click', (e) => {
  if(e.target === $modal) $modal.classList.remove('open-modal')
  $modal.querySelector('video').pause()
  document.querySelector('body').style.overflowY = "scroll"
})

