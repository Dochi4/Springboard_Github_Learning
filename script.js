const memePlace = document.querySelector("#memePlace");
const imgInput = document.querySelector("input[name='memeImg']");
const textTopInput = document.querySelector("input[name='memeTopText']");
const textBottomInput = document.querySelector("input[name='memeBottomText']");
const form = document.querySelector("#memeForm");
// above are nearly everything that I needed to gram from my HTMl file to make this work.

// function
function createMemeImageElement(src, alt) {
  const img = document.createElement("img");
  img.classList.add("memeImg");
  img.src = src;
  img.alt = alt;
  return img;
  // this function make a new image for later use.
}

function createMemeImageText(text, position) {
  const topText = document.createElement("h2");
  topText.classList.add("textStyle");
  if (position === "top") {
    topText.classList.add("topText");
  } else if (position === "bottom") {
    topText.classList.add("bottomText");
  }
  topText.innerText = text;
  return topText;
}

function addMeme(topTextElement, bottomTextElement, imageElement) {
  const memeDiv = document.createElement("div");
  memeDiv.classList.add("memeHolder");
  memeDiv.appendChild(imageElement);
  memeDiv.appendChild(topTextElement);
  memeDiv.appendChild(bottomTextElement);
  return memeDiv;
}

// handlers
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // prevents the default function of the form event
  const src = imgInput.value;
  const alt = "Meme Image";
  // above is where i define my scr and alt for the new image.

  const imageElement = createMemeImageElement(src, alt);
  const topTextElement = createMemeImageText(textTopInput.value, "top");
  const bottomTextElement = createMemeImageText(
    textBottomInput.value,
    "bottom"
  );
  const newMeme = addMeme(topTextElement, bottomTextElement, imageElement);
  memePlace.appendChild(newMeme);
  // This is where i appened each newConst into one another then back into the right div then section I made for the purpose.
});

memePlace.addEventListener("click", function (e) {
  if (e.target.className === "memeHolder") {
    e.target.remove();
  }
  // This was made later one in the process after the CCSS useing my old project TODO list and insperation.
  // This removes the current memeHolder div and all children when clicked.
});

// execution
