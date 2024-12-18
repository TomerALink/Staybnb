export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  loadFromStorage,
  saveToStorage,
  animateCSS,
  debounce,
  getAssetSrc,

  getRandomDecimal,

  pluralize,
  calcAvgRating,
  getMonthReview,
  getRandomStayDurationReview
}

function makeId(length = 6) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

// In our utilService
function animateCSS(el, animation) {
  const prefix = 'animate__'
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`

    el.classList.add(`${prefix}animated`, animationName)

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation()
      el.classList.remove(`${prefix}animated`, animationName)
      resolve('Animation ended')
    }
    el.addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}

function getAssetSrc(name) {
  const path = `/src/assets/img/${name}`
  const modules = import.meta.globEager('/src/assets/img/*')
  const mod = modules[path]
  return mod.default
}



function getRandomDecimal() {
  const randomDecimal = (Math.random() * (5 - 4) + 4).toFixed(2)

  // If the decimal has ".00", format it with 1 digit
  return randomDecimal.endsWith("00") ? parseFloat(randomDecimal).toFixed(1) : randomDecimal
}

function pluralize(count, singular, plural = null) {
  if (count === 1) return `${count} ${singular}`
  return `${count} ${plural || singular + 's'}`
}

function calcAvgRating() {
  return getRandomDecimal()
}

// function calcAvgRating(reviews) {
  
//   if (!reviews || reviews.length === 0) {
//     return null
//   }
//   const sum = reviews.reduce((acc, review) => acc + review.rate, 0)
//   const numDecimal = ((100 * sum / reviews.length) % 100 === 0) ? 1 : 2
//   return (sum / reviews.length).toFixed(numDecimal)
// }


function getMonthReview(date) {
  const dateFormat = new Date(Date.parse(date))
  return dateFormat.toLocaleString('default', { month: 'long' })
}

function getRandomStayDurationReview() {
  const stayDuration = ['Stayed one night', 'Stayed a few nights', 'Stayed over a week', 'Stayed about a week']
  const idx = getRandomIntInclusive(0, stayDuration.length - 1)
  return stayDuration[idx]
}