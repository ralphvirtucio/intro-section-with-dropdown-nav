
const disclosures = document.querySelectorAll('.disclosure')

function toggleDisclosures() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true'
  this.setAttribute('aria-expanded', !isExpanded)
}


disclosures.forEach(component => {
  component.dataset.state = 'ready'

  const btn = component.querySelector('.btn--disclosure')

  btn.removeAttribute('disabled')
  btn.removeAttribute('title')

  btn.addEventListener('click', toggleDisclosures)
})