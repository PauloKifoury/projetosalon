const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changerHeaderWhenScroll() {
  if (window.scrolly >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remover('scroll')
  }
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhet: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const scrollRevel = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollRevel.reveal(
  `#home .text, #home .image,
  #about .imange, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)
const backTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classLisr.remove('show')
  }
}
const sections = document.querySelectorAll('main section [id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageY0ffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectiontTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const chekpointStart = checkpoint >= sectiontTop
    const chekpointEnd = chekpoint <= sectiontTop + sectionHeight

    if (chekpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
window.addEventListener('scroll', function () {
  changerHeaderWhenScroll()
  backToTop()
})
