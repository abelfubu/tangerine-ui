// const imagesLoaded = require('imagesloaded');

// Map number x from range [a, b] to [c, d]
const map = (x: any, a: any, b: any, c: any, d: any) =>
  ((x - a) * (d - c)) / (b - a) + c

// Linear interpolation
const lerp = (a: any, b: any, n: any) => (1 - n) * a + n * b

const calcWinsize = () => {
  return { width: window.innerWidth, height: window.innerHeight }
}

// Gets the mouse position
const getMousePos = (e: MouseEvent) => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event as MouseEvent
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }

  return { x: posx, y: posy }
}

const randomFloat = (min: number, max: number) =>
  parseFloat(Math.min(min + Math.random() * (max - min), max).toFixed(2))

// // Preload images
// const preloadImages = (selector) => {
//     return new Promise((resolve, _) => {
//         imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
//     });
// };

export { map, lerp, calcWinsize, getMousePos, randomFloat }
