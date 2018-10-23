var button = document.getElementsByClassName('greenbutton');
function changeColor() {
	this.classList.toggle('change-color');
};
for (i=0; i < button.length; i++) {
  button[i].addEventListener('mouseenter', changeColor);
  button[i].addEventListener('mouseleave', changeColor);
  button[i].addEventListener('click', showDiv);
};

var button = document.getElementsByClassName('orangebutton');
function changeColor() {
	this.classList.toggle('change-color');
};
for (i=0; i < button.length; i++) {
 button[i].addEventListener('mouseenter', changeColor);
 button[i].addEventListener('mouseleave', changeColor);
};


var container = document.getElementsByClassName('container');
function changeOpacity() {
  this.classList.toggle('change-opacity');
};

for (i=0; i < container.length; i++) {
  container[i].addEventListener('mouseenter', changeOpacity);
  container[i].addEventListener('mouseleave', changeOpacity);
};

var locationDiv = document.getElementsByClassName('hide-div');
function showDiv() {
  this.nextElementSibling.classList.toggle('show-div');
  //Get THIS button's next sibling and toggle ITS class

  if (this.nextElementSibling.classList.contains('show-div')) {
    //If THIS button's next sibling has the class show-div

    this.innerHTML = "CLOSE LOCATIONS";
    //Make THIS button's innerHTML equal to Close Bio

  } else {
    this.innerHTML = "FIND A LOCATION";
    //Otherwise, make THIS button's innerHTML equal to Read Bio
  }
};






