// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

//Get reference to the click me button in memory
let clickMeButton = document.querySelector(`.click-me`)

//Event listener for click me button. add event listner
//takes 2 arguments(what event listening for (in this case/usually `click`), async function thing {put stuff in curly brace})
//alert is a thing. 
clickMeButton.addEventListener(`click`, async function(event) {

  //this shows you a little pop up with "the page says, the button was clicked"
  alert(`the button was clicked`)

  //This changes the title of the page (per code above in 1-2, 4-5)
  let pageTitleElement = document.querySelector(`.page-title`)
  pageTitleElement.innerHTML = `Movies to watch!`
})

//Get reference to "add movie" link
let addMovieLink = document.querySelector(`.add-movie`)
// Event listener for the "add movie" link
addMovieLink.addEventListener(`click`, async function(event) {

  //prevent link's default behavior (which is to go to Google) needs to happen first
  event.preventDefault()

  // Get a reference to the bulleted list of movies
let movieList = document.querySelector(`.movies-to-watch`)

// Add an new list item to the bulleted list of movies
movieList.insertAdjacentHTML(`beforeend`, `
  <li>Spaceballs</li>`)
})

// Get a reference to the "zoom inage" button
let zoomImageButton = document.querySelector(`.zoom-image`)

//Event listener for the "zoom inage button"
zoomImageButton.addEventListener(`click`, async function(event) {

  // Get a reference to the image
let image = document.querySelector(`img`)

// Add the `border-pink-500` class to the image element
image.classList.add(`border-pink-500`)

//remove w-96 to w-full when you click button
image.classList.remove(`w-96`)
image.classList.add(`w-full`)

//this does something else -- toggles between 
//image.classList.toggle(`w-96`)
//image.classList.toggle(`w-full`)

})