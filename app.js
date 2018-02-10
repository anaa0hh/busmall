'use strict';
//array to store the objects
Picture.allPictures = [];
// console.log(Picture.allPictures);
//make my constructor function
function Picture(name, filepath, pictureShown, pictureClicked) {
  this.name = name;
  this.filepath = filepath;
  this.pictureShown = pictureShown;
  this.pictureClicked = pictureClicked;
  Picture.allPictures.push(this);
//   console.log(Picture.allPictures);
}

//modulo is used for rotating through an array if you have a weird starting point, it returns the remainder


//use my constructor function to create new Picture instances
new Picture('Bag','images/bag.jpg');
new Picture('Banana', 'images/banana.jpg');
new Picture('bathroom', 'images/bathroom.jpg');
new Picture('boots', 'images/boots.jpg');
new Picture('breakfast', 'images/breakfast.jpg');
new Picture('bubblegum', 'images/bubblegum.jpg');
new Picture('chair', 'images/chair.jpg');
new Picture('cthulhu', 'images/cthulhu.jpg');
new Picture('dog-duck', 'images/dog-duck.jpg');
new Picture('dragon', 'images/dragon.jpg');
new Picture('pen', 'images/pen.jpg');
new Picture('pet-sweep', 'images/pet-sweep.jpg');
new Picture('tauntaun', 'images/tauntaun.jpg');
new Picture('unicorn', 'images/unicorn.jpg');
new Picture('usb', 'images/usb.gif');
new Picture('water-can', 'images/water-can.jpg');
new Picture('wine-glass', 'images/wine-glass.jpg');
// console.log(Picture.allPictures);
//listener, something to be clicked...events!!!
var imgEl1 = document.getElementById('random1');
var imgEl2 = document.getElementById('random2');
var imgEl3 = document.getElementById('random3');

imgEl1.addEventListener('click', randomPicture);
imgEl2.addEventListener('click', randomPicture);
imgEl3.addEventListener('click', randomPicture);

//randomly display one of the pictures
function randomPicture() {
  var len = Picture.allPictures.length;//created var len to not  have to keep using Picture.allPictures
  var randomIndex = Math.floor(Math.random() * len);
  if (randomIndex > 0) { // 0 is the edge case, anything % 0 = NaN beacuse no remainder so it breaks the code because we are unable to access an array item without a number
    imgEl1.src = Picture.allPictures[randomIndex].filepath; //this is always going to work because there is no modulo involved so randomIndex will always be a number
    imgEl2.src = Picture.allPictures[(len+1)%randomIndex].filepath;
    imgEl3.src = Picture.allPictures[(len+2)%randomIndex].filepath;
  } else { //if its 0, then run the code again
    randomPicture();
  }
  console.log(randomIndex, (len+1)%randomIndex, (len+2)%randomIndex);
}
randomPicture();

// //array to store objects//

// pictures.listOfImages = [];
// ////////////////////constructor function//////////////////
// function RandomImages(name, filepath, imageShown, imageClicked) {
//   this.name = name;
//   this.filepath = filepath;
//   this.imageShown = imageShown;
//   this.imageClicked = imageClicked;


// }