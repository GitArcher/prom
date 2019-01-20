const [btnHome, btnExample, btnAbout] = document.querySelectorAll('header > div')
const main = document.querySelector('main')

btnHome.addEventListener( 'click', moveMain(0) )
btnExample.addEventListener( 'click', moveMain(1) )
btnAbout.addEventListener( 'click', moveMain(2) )

function moveMain(step) {
  return () => main.style.transform = `translateY(${-step*100}%)`
}
