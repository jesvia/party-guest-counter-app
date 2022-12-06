// document.getElementById("count-el").innerText = 5
// the first part of the above expression FIRST asks for the html element: document.getElementById("count-el")
let countEl = document.getElementById("count-el")
// countEL is in a camel case format

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0
function increment() {
  count += 1
  // this part actuaally modifies the html element: innerText = 5
  countEl.textContent = count // this assigns the value to html element
  console.log(count)

}

let saveEl = document.getElementById("save-el")
// 1. Create a function, save(), which logs out the count when it's called
function save(){
  let hi = " -"
  let dis = " "+ count + hi
  saveEl.textContent += dis //this will stop from exisitng content of the para from being deleted and add the new stuff to it, instead of replacing it
// replacing INNERTEXT with TEXTCONTENT
// want count to be equal to 0 after hittign save
  count = 0
  countEl.textContent = count
  console.log(count)
}

// Create a variable, message, that stores the string: "You have three new notifications"
// let message = "you have three new notifications"
// let username = "hello"
// console.log(username +" " +message)
// -------END-------

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
// let name = "jes"
// let greeting = "hi, my name is "
// myGreeting = greeting  + name
// console.log(myGreeting)
// ---------------END-------------

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
let welcomeEl = document.getElementById("welcome-el")
let name = 'jess'
let greeting = 'hello '
welcomeEl.innerText = greeting
welcomeEl.innerText +="👋"

//  -------------------------------------------------------------
// this is my own function to swap
let el1 = document.getElementById("swap1")
let el2 = document.getElementById("swap2")

function swap(){
  let k = el1.innerText
  el1.innerText = el2.innerText
  el2.innerText = k
}
// ------------------------------------------------------------------
// let lap1 = 40
// let lap2 = 60
// let lap3 = 80
//
// function totalLaptime(){
//   let totalTime = lap1 + lap2 + lap3
//   console.log(totalTime)
// }
//
// totalLaptime()
// // totalTime only lives within the func, if tried to console.log out of the func it wont work
//
// // Create a function that increments the lapsCompleted variable with one
// // Run it three times
// lapsCompleted = 0
// function lapsAdd(){
//   lapsCompleted = lapsCompleted + 1
//   console.log(lapsCompleted)
// }
//
// lapsAdd()
// lapsAdd()
// lapsAdd()

// document.getElementById("count").innerText = 5
