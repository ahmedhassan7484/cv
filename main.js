

var x1 = "Ahmed Hassan Abo El Ghait";
var x2 = "Full Stack Web Devaloper";
var x3 = "";
var x4 = "";
var counter = 0;
var _na = document.getElementById("na1");
var x1Finished = false;

var intervalId = setInterval(function() {
  if (!x1Finished) {
    if (counter < x1.length) {
      x3 += x1[counter];
      _na.innerHTML = x3;
    } else {
      x1Finished = true;
      counter = 0;
      x3 = "";
    }
  }

  if (x1Finished) {
    if (counter < x2.length) {
      x4 += x2[counter];
      _na.innerHTML = x4;
    } else {
      x1Finished = false;
      x4 = "";
      counter = -1;
      x3 = ""; // Reset x3 to an empty string
      setTimeout(function() {
        _na.innerHTML = "";
      }, 2000); // Wait 2 seconds before restarting
    }
  }

  counter++;
}, 100);
/*
function animateText() {
    var x1 = "ahmed hassan abo el ghait";
    var x2 = "fulltack web devaloper";
    var x3 = "";
    var x4 = "";
    var counter = 0;
    var _na = document.getElementById("na1");
    var x1Finished = false;
  
    setInterval(function() {
      if (!x1Finished) {
        if (counter < x1.length) {
          x3 += x1[counter];
          _na.innerHTML = x3;
        } else {
          x1Finished = true;
          counter = 0;
          x3 = "";
        }
      }
  
      if (x1Finished) {
        if (counter < x2.length) {
          x4 += x2[counter];
          _na.innerHTML = x4;
        } else {
          x1Finished = false;
          x4 = "";
          counter = 0;
        }
      }
  
      counter++;
      
      if (counter >= x1.length + x2.length) {
        counter = 0;
      }
    }, 100);
  }
  
  animateText();

    /*var x1 = "ahmed hassan abo el ghait";
    var x2 = "fulltack web devaloper";
    var x3 = "";
    var x4 = "";
    var counter = 0;
    var _na = document.getElementById("na1");
    var x1Finished = false;
    
    setInterval(function() {
      if (!x1Finished) {
        if (counter < x1.length) {
          x3 += x1[counter];
          _na.innerHTML = x3;
        } else {
          x1Finished = true;
          counter = 0;
          x3 = "";
        }
      }
      
      if (x1Finished) {
        if (counter < x2.length) {
          x4 += x2[counter];
          _na.innerHTML = x4;
        }
      }
    
      counter++;
    

},100)
*/