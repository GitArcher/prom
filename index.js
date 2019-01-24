//const [btnHome, btnExample, btnAbout] = document.querySelectorAll('header > div')
const tabs = Array.from( document.querySelectorAll('header > div') )
//const [home, examples, about] = document.querySelectorAll('main section')
const sections = Array.from( document.querySelectorAll('main section') )

const main = document.querySelector('main')

// btnHome.addEventListener( 'click', moveMain(3) )
// btnExample.addEventListener( 'click', moveMain(2) )
// btnAbout.addEventListener( 'click', moveMain(1) )
//

tabs.forEach( (tab, num) => {
  tab.addEventListener( 'click', toggleActiveTab )
  tab.addEventListener( 'click', moveMain(num) )
})

function moveMain(step) {
  return event => main.style.transform = `translateX(${ -(step/3)*100 }%)`
}

function toggleActiveTab() {
  document.querySelector('.active').classList.remove('active')
  this.classList.add('active')
}

function viewSection() {
  sections
}
