const miniFiles = Array.from( document.querySelectorAll('figure div') )
const text = {
  html:[

  ],
  js: [],
  css: []
}

function createLine( text ) {
  const line = document.createElement('div')
  line.textContent = text
  return line
}
