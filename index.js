

// let container = document.getElementById('container');

// window.addEventListener(
// "mousemove", function (e) {
//   x = e.offsetX;
//   y = e.offsetY;
//   container.style.backgroundColor 
//       = `rgb(${x}, ${y}, ${x - y})`;
// });


document.onmousemove = function (e) {
  let container = document.getElementById('container');
  let x = e.clientX;
  let y = e.clientY;  
  container.style.backgroundColor = `rgb(${x},${y},${(x + y) / 10})`;
}




// const changeColour = () => {
//   console.log('testing');
//   document.getElementById("container").style.backgroundColor = "lightblue";
// };


// window.addEventListener(
// "mousemove", function (e) {

// $(document).mousemove(function(e){
//   var $width = ($(document).width())/255;
//   var $height = ($(document).height())/255;
//   var $pageX = parseInt(e.pageX / $width,10);
//   var $pageY = parseInt(e.pageY / $height,10);
//   $("container").css("background-color", "rgb("+$pageX+","+$pageY+","+$pageX+")");
//   }); 
