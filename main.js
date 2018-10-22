var button = document.getElementById('greenbutton');
var button = document.getElementById('orangebutton');

function changeColor() {
  this.classList.toggle('change-color');
};

button.addEventListener('mouseenter', changeColor);
button.addEventListener('mouseleave', changeColor);


var container = document.getElementsByClassName('container');
function changeOpacity() {
  this.classList.toggle('change-opacity');
};

for (i=0; i < container.length; i++) {
  container[i].addEventListener('mouseenter', changeOpacity);
  container[i].addEventListener('mouseleave', changeOpacity);
};

