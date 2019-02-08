const tabs = Array.from( document.querySelectorAll('nav > div') )
const sections = Array.from( document.querySelectorAll('main section') )

const main = document.querySelector('main')


const preload = [initTabs]
preload.forEach( func => func() )

window.addEventListener('load', () => {

})


function initTabs() {
  tabs.forEach( (tab, tabNum) => tab.addEventListener( 'click', getTabHandler(tab, tabNum) ) )
}

function getTabHandler(tab, tabNum) {
  return () => {
    toggleClassOn(tab, 'active')
    toggleClassOn(sections[tabNum], 'view')
    moveMain(tabNum)
  }
}

function moveMain(step) {
  main.style.transform = `translateX(${ -(step/3)*100 }%)`
}

function toggleClassOn(element, selector) {
  document.querySelector(`.${selector}`).classList.remove(selector)
  element.classList.add(selector)
}
