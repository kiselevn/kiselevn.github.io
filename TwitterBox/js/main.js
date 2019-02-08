const MAX_LENGTH = 3;
const IMAGE_LENGTH = 2;
const input = document.querySelector('#tweet-message');
const counter = document.querySelector('#counter');
const button = document.querySelector('#button-send');
const imageInput = document.querySelector('#loading-images');
const imagePreview = document.querySelector('#image-preview');
const imageList = document.querySelector('#image-list');

const stat = {
  messageCounter: 0,
  imageCounter: 0,
  image: []
};

const setCounterLength = len => {
  counter.textContent = `${len} из ${MAX_LENGTH}`;
};

const lengthControl = () => {
  const totalLength = stat.messageCounter + stat.imageCounter * IMAGE_LENGTH;

  if (totalLength > MAX_LENGTH) {
    counter.classList.add('max-length');
    button.disabled = true;
  } else {
    counter.classList.remove('max-length');
    button.disabled = false;
  }

  setCounterLength(totalLength);
};

const handleInputChange = () => {
  stat.messageCounter = input.value.length;
  lengthControl();
};

const handleImageChange = event => {
  const reader = new window.FileReader();
  const file = event.target.files[0];

  reader.onload = function exp(e) {
    stat.image += `<li><img src="${e.target.result}"/></li>`;
    imageList.innerHTML = stat.image;
    // console.log(stat.image);
    stat.imageCounter += 1;
    lengthControl();
  };

  reader.readAsDataURL(file);
};

const deleteImage = event => {
  console.log(event);
  debugger;
  stat.imageCounter -= 1;
};

input.addEventListener('input', handleInputChange);
imageInput.addEventListener('input', handleImageChange);
imagePreview.addEventListener('click', deleteImage);

lengthControl();
