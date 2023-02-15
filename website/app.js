
const text=document.querySelector('.animation');
const strText= text.textContent;
const splitText= strText.split("");
text.textContent="";

for(let i=0; i<splitText.length;i++){
  text.innerHTML += "<span>" +splitText[i] + "</span>";
}

let char=0;
// Start timer to add the "fade" class to each character
let timer= setInterval(onTick, 50);

// Function that adds the "fade" class to the next character in the sequence
function onTick(){
  
  // Get the next "span" element
  const span= text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char==splitText.length){
    complete();
    return;
  }
}

// Function that stops the timer
function complete(){
  clearInterval(timer);
  timer=null;
}
