

/*Another code snippet from another example*/

/*
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Amsterdam.", "Full Service.", "Webdevelopment.", "Wij zijn Occhio!"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
*/



/*Animate the rimes as soon as the page is loaded*/

if (document.readyState != 'loading'){
  onDocumentReady();
  
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
  
}


var getRime= document.getElementById("rime");
var getSecondRime= document.getElementById("secondRime");


function onDocumentReady() {

  setInterval(10000);

  
  document
    .addEventListener('pointermove', updateElementFonts);
  
  
  
  document
    .getElementById('rime').onclick = function() {onRimePointerOver()};
  
    
  
  document
    .getElementById('secondRime')
    .addEventListener('click', onSecondRimePointerOver);

  document
    .getElementById('right')
    .addEventListener('pointerover', onHover);
  
    document
    .getElementById('tight')
    .addEventListener('pointerover', onHover);

  document
    .getElementById('quite')
    .addEventListener('pointerover', onHover);  
    
    
    
}




function updateFont(el, d) {

  let size = parseInt(d);
  
  if (size < 100){

    el.style.fontVariationSettings = '\'term\' ' + 100 + ', \'wght\' ' + 200;

  } 
  else if (size > 300){

    el.style.fontVariationSettings = '\'term\' ' + 0 + ', \'wght\' ' + 50 + ', \'inkt\' ' + 0;
  }
  else{


    el.style.fontVariationSettings = '\'term\' ' + 50 + ', \'wght\' ' + 170 + ', \'inkt\' ' + 100;

  }

 
}

function calcDistance(el, pointerX, pointerY) {
  let rect = el.getBoundingClientRect();
  let xSpan = rect.left;
  let ySpan = rect.top;

  let test = pointerX -xSpan;
  let distance = Math.sqrt(Math.pow((pointerX-xSpan), 2)+Math.pow((pointerY-ySpan), 2));
  console.log(distance);
  return distance;
}

function updateElementFonts(ev){
  pointerX = ev.clientX;
  pointerY = ev.clientY;
  let el = document.getElementById('rime');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 
  el = document.getElementById('secondRime');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 

}





function onRimePointerOver() {

  
  animateRimes();
  animateSecond();
  
}



function onSecondRimePointerOver(){
  
  animateRimes();
  animateSecond();
  
}

function onHover(){
  
  
}







function animateRimes(e) {
   // Two keyframes: start and stop
   const keyframes = [
    { fontVariationSettings: '\'wdth\' 0, \'wght\' 50' },
    { fontVariationSettings: '\'wdth\' 100, \'wght\' 200' }
  ];
  // Set up some options so anim loops continuously
  const options = {
    iterations: 4,
    delay: 100,
    direction: 'alternate',
    duration: 700,
    easing: 'ease-in-out'
  };

  //let el = e.target;

  // Animate!
  let player = getSecondRime.animate(keyframes, options);

  // Use this helper function to stop the animation
  //handleStop(el, player);
  
}



function animateSecond(e) {
   // Two keyframes: start and stop
   const keyframes = [
    { fontVariationSettings: '\'wdth\' 0, \'wght\' 50' },
    { fontVariationSettings: '\'wdth\' 100, \'wght\' 200' }
  ];
  // Set up some options so anim loops continuously
  const options = {
    iterations: 4,
    delay: 100,
    direction: 'alternate',
    duration: 700,
    easing: 'ease-in-out'
  };

  //let el = e.target;

  // Animate!
  let player = getRime.animate(keyframes, options);

  // Use this helper function to stop the animation
  //handleStop(el, player);

}


/*
function animateFeedForward(e) {

  // Two keyframes: start and stop
  const keyframes = [
    { fontVariationSettings: '\'wdth\' 0, \'wght\' 50' },
    { fontVariationSettings: '\'wdth\' 100, \'wght\' 200' }
  ];
  // Set up some options so anim loops continuously
  const options = {
    iterations: 1,
    delay: 100,
    direction: 'alternate',
    duration: 700,
    easing: 'ease-in-out'
  };

  //let el = e.target;

  // Animate!
  let player = getRime.animate(keyframes, options);

  //Use this helper function to stop the animation
  //handleStop(el, player);

}
*/


// Reusable function to stop animation when 'dubbelclick' happens on an element
function handleStop(el, player) {
  el.addEventListener(
    '',
    () => {
      console.log('Stopping animation');
      player.cancel();
    },
    { once: true }
  );
}

