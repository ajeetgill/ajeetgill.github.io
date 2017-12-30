"use strict";
document.querySelector('img.preview').addEventListener('click', function(e) {
  var lowRes = e.target.src;
  // console.log("lowRes : "+lowRes);  //Test
  var myOverlay = document.querySelector('.overlay');
  var highRes = document.createElement('img');
  var mySpinner = document.createElement('img');

  myOverlay.style.display = 'block';
  highRes.className = 'bgImg';
  highRes.src = lowRes.substr(0, lowRes.length-7) + '.jpg';
  myOverlay.appendChild(highRes);

  mySpinner.className = 'spinner';
  mySpinner.src = 'images/spinner.gif';
  myOverlay.appendChild(mySpinner);

  highRes.addEventListener('load', function(f) {
    mySpinner.parentNode.removeChild(mySpinner);
    // console.log(f);
  });

  //Checks on which element the user has clicked and if its outside the image then it removes the image and overlay.
  myOverlay.addEventListener('click', function bgRemover(f){
    var currentElement = f.explicitOriginalTarget.className;
    if(currentElement === myOverlay.className){
      myOverlay.style.display = 'none';
      myOverlay.removeChild(highRes);
    }
  myOverlay.removeEventListener('click', bgRemover);  //the overlay kept listening and trying to find highRes although it had been deleted so had to delete event listener 
                                                      //the removeEventListener needs a function name that's why this function has a name.~
  },false);

}, false);