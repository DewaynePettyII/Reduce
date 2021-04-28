//Introduction
//For a long time, the web platform has offered JavaScript programmers a number of functions that allow -
// - them to asynchronously execute code after a certain time interval has elapsed, and to repeatedly -
// - execute a block of code has asynchronously until you tell it to stop. 

//Asynchronously: when you send something and it doesn't matter when the responce arrives. 
//Synchronously: the code will stop until it gets a responce from the other side. 

//These functions are: setTimeout() / setInterval() requestAnimationFrame()
//setTimeout: executes a specific block of code once after a specific time has elapsed. 
//setInterval: executes a specific block of code repeated with a fixed time between each call. 
//requestAnimationFrame: the modern version of setInterval. Executes a specific block of code before the browser next repaints the display, allowing the animation to run at a suitable framerate regardless of the environment that is being run.
//The asynchronous code set up by these functions runs on the main thread. 

//let greeting = setTimeout(function(){
//     console.log("helloworld")
// },5000)

//let myreading = setTimeout(function sayHi(){
   // console.log("helloworld2")
//},1100)

function sayHi(){
    console.log("hellowworld3")
}

let anotherGreeting = setTimeout(sayHi, 2000)
clearTimeout(anotherGreeting)

//Finally, if a timeOut has been created, you can cancel it before the specific time has elapsed by calling clear timeOuts.