window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("draw-triangle").onclick = drawRectangle;
    document.getElementById("smile").onclick = drawFace;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    // write your exercise 1 code here

let message = prompt("Enter a Message: ");

while (message.length >= 50){
  alert("Message Exceeds 50 Characters");
  message = prompt("Enter a Message: ");
}
const canvas = document.getElementById('student-canvas-1');
const ctx = canvas.getContext('2d');
ctx.font = '48px sans-serif';
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.strokeText(message, 30, 70, 994);



};

/*
 * Exercise 2.
 */

const drawRectangle = function() {

    // write your exercise 2 code here

      const canvas = document.getElementById('student-canvas-2');
      const ctx = canvas.getContext('2d');
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     do {
       var width = prompt("Width: ")
       if (width == null) {
         break;
       }
       var height = prompt("Height: ")
       if (height == null) {
         break;
       }
       var x = prompt("X: ")
       if (x == null) {
         break;
      }
       var y = prompt("Y: ")
       if (y == null) {
         break;
      }
       if (width > canvas.width || width < 1) {
         alert("Your width must be between 1 and 1024.")
       }
       if (height > canvas.height || height < 1) {
         alert("Your height must be between 1 and 512.")
       }
       if (x < 1 || x > 1024) {
         alert("Your x-coordinate must be between 1 and 1024.")
       }
       if (y < 1 || y > 512) {
         alert("Your y-coordinate must be between 1 and 512.")
       }
       if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
         alert("One of your values is not a number.")
       }
     } while (width > canvas.width || width < 1 || height > canvas.height || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y))

     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.strokeRect(x, y, width, height);






};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  // write your exercise 3 code here

const canvas = document.getElementById('student-canvas-3');
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
do {
  var color = (prompt("Color: "))
  if (color == null) {
    break;
  }
  color = String(color)
  var color_case = color.toLowerCase()
  if (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow") {
    alert(color + " is not a supported color.")
  }
} while (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow")

if (color != null) {
  ctx.fillStyle = color_case;
  ctx.fillRect(10, 10, 100, 50);
}
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {

    // write your exercise 4 code here
    const canvas = document.getElementById('student-canvas-4');
    const ctx = canvas.getContext('2d');

};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 5 code here
    const canvas = document.getElementById('student-canvas-5');
    
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
  var radius = (prompt("Radius: "))
  if (radius == null) {
    break;
  }
  if (radius < 32) {
    alert("Your radius must be at least 32.")
  }
  else if (isNaN(radius)) {
    alert("Your radius is not a number.")
  }
  else if (radius > 256) {
    alert("Your smiley face won't fit on the canvas.")
  }
} while (radius > 256 || isNaN(radius) || radius < 32)

var eyesRadius = 0.15 * radius
var mouthRadius = 0.7 * radius


ctx.beginPath();
ctx.arc(512, 256, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512, 256, mouthRadius, 0, Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, eyesRadius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512 + 0.4 * radius, 256 - 0.4* radius, eyesRadius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {


    // write your exercise 5 code here
};
