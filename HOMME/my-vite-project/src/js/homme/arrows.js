import { hommeImgDesktop, hommeImgMobile } from './backgroundImg.js'
import { hommeText } from './data-text.js'

const arrowLeft = document.getElementById('arrowLeft')
const arrowRight = document.getElementById('arrowRight')

const hommeUpTitle = document.getElementById('hommeUpTitle')
const hommeUpText = document.getElementById('hommeUpText')
const hommeUpImg = document.getElementById('hommeUpImg')
const arrows = document.getElementById('arrows')

let count = 0

const mediaqueryList = window.matchMedia('(min-width: 768px)')

function mediQueryImg() {
  mediaqueryList.matches
    ? (hommeUpImg.style.backgroundImage = `url(${hommeImgDesktop[count].imgSrc})`)
    : (hommeUpImg.style.backgroundImage = `url(${hommeImgMobile[count].imgSrc})`)
  hommeUpImg.style.transition = 'backgroundImg 0.5s ease-in-out'
}

export const changeImgText = () => {
  arrows.addEventListener('click', e => {
    if (e.target === arrowRight && count < hommeText.length - 1) {
      count++
      hommeUpTitle.innerHTML = hommeText[count].title
      hommeUpText.innerHTML = hommeText[count].paragraph
      mediQueryImg()
    }

    if (e.target === arrowLeft && count > 0) {
      count--
      hommeUpTitle.innerHTML = hommeText[count].title
      hommeUpText.innerHTML = hommeText[count].paragraph
      mediQueryImg()
    }
  })
}
changeImgText()
