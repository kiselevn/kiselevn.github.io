const MAX_LENGTH = 280;
const IMAGE_LENGTH = 20;
const input = document.querySelector('#tweet-message');
const counter = document.querySelector('#counter');
const button = document.querySelector('#button-send');
const imageInput = document.querySelector('#loading-images');
const imagePreview = document.querySelector('#image-preview');
const imageList = document.querySelector('#image-list');

const state = {
  messageCounter: 0,
  imageCounter: 0,
  imageUrl: []
};

const setCounterLength = len => {
  counter.textContent = `${len} из ${MAX_LENGTH}`;
};

const lengthControl = () => {
  const totalLength = state.messageCounter + state.imageCounter * IMAGE_LENGTH;

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
  state.messageCounter = input.value.length;

  lengthControl();
};

const setPreview = () => {
  imageList.innerHTML = state.imageUrl
    .map(url => {
      return `<li><img src="${url}"></li>`;
    })
    .join('');
};

const deleteImage = event => {
  if (event.target.tagName === 'IMG') {
    state.imageUrl = state.imageUrl.filter(e => {
      return e !== event.target.currentSrc;
    });

    state.imageCounter -= 1;

    lengthControl();
    setPreview();
  }
};

const handleImageChange = event => {
  const reader = new window.FileReader();

  reader.onload = function exp(e) {
    state.imageUrl.push(e.target.result);
    state.imageCounter += 1;

    setPreview();
    lengthControl();
  };

  reader.readAsDataURL(event.target.files[0]);
};

input.addEventListener('input', handleInputChange);
imageInput.addEventListener('input', handleImageChange);
imagePreview.addEventListener('click', deleteImage);

lengthControl();
