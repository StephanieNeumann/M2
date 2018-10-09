
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
    .getElementById('head')
    .addEventListener('pointerover', onHover);
  
    document
    .getElementById('heart')
    .addEventListener('pointerover', onHover);
  
    

    
  
   
}




function updateFont(el, d) {

  let size = parseInt(d);

  
  if (size < 100){ // cursor close to word

    el.style.fontVariationSettings = '\'term\' ' + 100 + ', \'wght\' ' + 200;
    
    if(el=head){
      document.getElementById("head").style.letterSpacing = "0.5px";
      el.style.fontVariationSettings = '\'term\' ' + 0 + ', \'wght\' ' + 200;
    }
    if(el=heart){
      document.getElementById("heart").style.letterSpacing = "0.5px";
      el.style.fontVariationSettings = '\'term\' ' + 0 + ', \'wght\' ' + 200;
    }
    
    document.getElementById("quite").style.opacity = "1";
    

  } 
  else if (size > 300){ // cursor the furtest away

    el.style.fontVariationSettings = '\'term\' ' + 0 + ', \'wght\' ' + 50 + ', \'inkt\' ' + 0;

    
    if(el=head){
      document.getElementById("head").style.letterSpacing = "2px";
      el.style.fontVariationSettings = '\'term\' ' + 0 + ', \'wght\' ' + 50;
    }

    if(el=heart){
      document.getElementById("heart").style.letterSpacing = "2px";
      el.style.fontVariationSettings = '\'term\' ' + 0 + ', \'wght\' ' + 50;
    }
    

    document.getElementById("quite").style.opacity = "0.3";
    
  }
  else{ // cursor between 100-300

    el.style.fontVariationSettings = '\'term\' ' + 50 + ', \'wght\' ' + 170 + ', \'inkt\' ' + 100;

    
    if(el=head){
      document.getElementById("head").style.letterSpacing = "1px";
      el.style.fontVariationSettings = '\'term\' ' + 0 + ', \'wght\' ' + 100;
    }

    if(el=heart){
      document.getElementById("heart").style.letterSpacing = "1px";
      el.style.fontVariationSettings = '\'term\' ' + 0 + ', \'wght\' ' + 100;
    }
    
    document.getElementById("quite").style.opacity = "0.7";
  } 

  

}

function calcDistance(el, pointerX, pointerY) {
  let rect = el.getBoundingClientRect();
  let xSpan = rect.right;
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

  
  el = document.getElementById('tight');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 
  el = document.getElementById('quite');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 
  el = document.getElementById('right');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 
  el = document.getElementById('all');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 
  el = document.getElementById('small');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 
  el = document.getElementById('head');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 
  el = document.getElementById('heart');
  updateFont(el, calcDistance(el, pointerX, pointerY)); 
  
}


function onHover(el, d){
  
  
  document.getElementById("head").style.letterSpacing = "0.2px";
  document.getElementById("heart").style.letterSpacing = "0.2px";
  document.getElementById("head").style.fontVariationSettings = '\'term\' ' + 100 + ', \'wght\' ' + 50;
  document.getElementById("heart").style.fontVariationSettings = '\'term\' ' + 100 + ', \'wght\' ' + 50;


}



function onRimePointerOver() {

  
  animateRimes();
  animateSecond();
  
}



function onSecondRimePointerOver(){
  
  animateRimes();
  animateSecond();
  
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

