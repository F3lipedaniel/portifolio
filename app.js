function subirTela() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

function aparecerBotãoScrollbar() {
  if (window.scrollY === 0) {
    //oculta botão
    document.querySelector('.scrollbutton').style.display = 'none'
  } else {
    //mostra botão
    document.querySelector('.scrollbutton').style.display = 'block'
  }
}
window.addEventListener('scroll', aparecerBotãoScrollbar)
