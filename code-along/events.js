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

//ZOOM IMAGE BUTTON
// Get a reference to the "zoom image" button
let zoomImageButton = document.querySelector(`.zoom-image`)

//Event listener for the "zoom image button"
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

//CHANGE IMAGE BUTTON
//Get a reference to the change image button
let changeImageButton = document.querySelector(`.change-image`)

//Event listener for the change image button
changeImageButton.addEventListener(`click`, async function(event) {
  
  //Get a reference to the image
  let image = document.querySelector(`img`)

  //Change the image
  image.setAttribute(`src`, `../images/grogu2.jpg`)

})

//SAY HI BUTTON
//Get a reference to the 'say hi button
let sayHiButton = document.querySelector(`.say-hi`)

//Event listener for say hi button
sayHiButton.addEventListener(`click`, async function(event) {

  // when you submit a form with no action, changes URL so need to prevent default behavior
  event.preventDefault()

  //Get a reference to the input field that holds the first name
  let nameInput = document.querySelector(`#first-name`)

  //Get the value from the input field
  let firstName = nameInput.value

  // optional step to check
  // console.log(firstName)

  //Get a reference to the "greet" element
  let greetElement = document.querySelector(`.greet`)

  //first name should have a value. if it doesn't, shouldn't say anything. 
  if (firstName.length > 0) {

    //Create a sentence to put in the greet element
    let sentence = `Hi, ${firstName}!`
    //Set the greet element's HTML to the sentence
    greetElement.innerHTML = sentence
  }
    //if you put something before, should clear
  else{
    greetElement.innerHTML = ``
  }

})

//ALL ANSWERS IN CODE ALONG COMPLETE