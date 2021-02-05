// Inputs
let slider = document.getElementById("volume-slider");
let number = document.getElementById("volume-number");
let button = document.getElementById("honk-btn");
let air_radio = document.getElementById("radio-air-horn");
let car_radio = document.getElementById("radio-car-horn");
let party_radio = document.getElementById("radio-party-horn");

// Images
let vol_image = document.getElementById("volume-image");
let sound_image = document.getElementById("sound-image");

// Audio
let audio = document.getElementById("horn-sound");

// Change slider
slider.addEventListener('input', () => {
  audio.volume = slider.value / 100;
  number.value = slider.value;
  changeImageAndBtn(slider.value);
});

// Change number
number.addEventListener('input', () => {
  audio.volume = number.value / 100;
  slider.value = number.value;
  changeImageAndBtn(number.value);
});

// Click air radio button
air_radio.addEventListener('input', () => {
  audio.src = './assets/media/audio/air-horn.mp3';
  sound_image.src = './assets/media/images/air-horn.svg'
});

// Click air radio button
car_radio.addEventListener('input', () => {
  audio.src = './assets/media/audio/car-horn.mp3';
  sound_image.src = './assets/media/images/car.svg'
});

// Click car radio button
party_radio.addEventListener('input', () => {
  audio.src = './assets/media/audio/party-horn.mp3';
  sound_image.src = './assets/media/images/party-horn.svg'
});

// Honk Button
button.addEventListener('click', (event) => {
  event.preventDefault();
  audio.play();
});

// Change volume image function
function changeImageAndBtn(volume) {
  if (button.disabled) {
    button.disabled = false;
  }
  if (volume >= 67) {
    vol_image.src = './assets/media/icons/volume-level-3.svg';
  } else if (volume >= 34) {
    vol_image.src = './assets/media/icons/volume-level-2.svg';
  } else if (volume > 0) {
    vol_image.src = './assets/media/icons/volume-level-1.svg';
  } else if (volume == 0) {
    vol_image.src = './assets/media/icons/volume-level-0.svg';
    button.disabled = true;
  }
}