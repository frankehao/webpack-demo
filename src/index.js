import './x.js'
import png from './assets/1.png'
const div = document.getElementById('app')

const button = document.createElement('button')
button.innerHTML = `懒加载`
button.onclick = () => {
  const ccc = import('./lazy.js')
  ccc.then(
    (module) => {
      const fn = module.default
      fn()
    },
    () => {}
  )
}
div.appendChild(button)
