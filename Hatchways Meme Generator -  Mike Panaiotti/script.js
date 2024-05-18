const memePlace = document.querySelector("#memePlace");
const imgInput = document.querySelector("input[name='memeImg']");
const textTopInput = document.querySelector("input[name='memeTopText']");
const textBottomInput= document.querySelector("input[name='memeBottomText']");
const form = document.querySelector("#memeForm");
// above are nearly everything that I needed to gram from my HTMl file to make this work. 

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // prevents the default function of the form event
  const src = imgInput.value;
  const alt = "Meme Image";
// above is where i define my scr and alt for the new image.

  const newImg = addImg(src, alt);
  const upperText = addTopText(textTopInput.value)
  const lowerText = addBottomText(textBottomInput.value)
  const newDiv = addDiv() 
  // here giving all the functions the data they need to from the html file

  newDiv.appendChild(newImg);
  newDiv.appendChild(upperText);
  newDiv.appendChild(lowerText);
  memePlace.appendChild(newDiv);
  // This is where i appened each newConst into one another then back into the right div then section I made for the purpose.
});

memePlace.addEventListener("click",function(e){
  if(e.target.className ==="memeHolder"){
    e.target.remove();
    }
    // This was made later one in the process after the CCSS useing my old project TODO list and insperation. 
    // This removes the current memeHolder div and all children when clicked.
});


function addDiv(div) {
  const memeDiv = document.createElement("div");
  memeDiv.classList.add("memeHolder")
  return memeDiv;
  // A new Div to hold the image and the 2 text inputs.
};

function addImg(src, alt) {
  const img = document.createElement("img");
  img.classList.add("memeImg")
  img.src = src;
  img.alt = alt;
  return img;
  // this function make a new image for later use. 
};

function addTopText(text){
  const topText = document.createElement('h2');
  topText.classList.add("textStyle","topText");
  // I choose early on to give the text 2 classes. One for positioing the text in the correct spot and another for styleing. 
  topText.innerText = text;
  return topText;
  // this function make a h2 for later use as the top text .
};

function addBottomText(text2){
  const bottomText = document.createElement('h2');
  bottomText.classList.add("textStyle","bottomText");
  bottomText.innerText = text2;
  return bottomText;
    // this function make a h2 for later use as the bottom text .
    // this was made by coping the top text.
};