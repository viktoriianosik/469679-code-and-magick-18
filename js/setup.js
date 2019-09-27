'use strict';

var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireballWrap= document.querySelector('.setup-fireball-wrap');
var coatInput = document.getElementsByName('coat-color')[0];
var eyesInput = document.getElementsByName('eyes-color')[0];
var fireballInput = document.getElementsByName('fireball-color')[0];

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var chooseRandom = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createRandomWizard = function () {
  return {
    name: chooseRandom(NAME) + ' ' + chooseRandom(SURNAME),
    coatColor: chooseRandom(COAT_COLOR),
    eyesColor: chooseRandom(EYES_COLOR)
  };
};

var generateWizards = function (n) {
  var wizards = [];
  for (var i = 0; i < n; i++) {
    wizards.push(createRandomWizard());
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderFragment = function () {
  var wizards = [];

  wizards = generateWizards(4);

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var changeFill = function (currentColor, element) {
  element.style.fill = currentColor;
};

var changeValue = function (newValue, element) {
  element.value = newValue;
};

var changeBackground = function (currentColor, element) {
  element.style.backgroundColor = currentColor;
};

renderFragment();

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function() {
  var currentColor = chooseRandom(COAT_COLOR);
  changeFill(currentColor, wizardCoat);
  changeValue(currentColor, coatInput);
});

wizardEyes.addEventListener('click', function() {
  var currentColor = chooseRandom(EYES_COLOR);
  changeFill(currentColor, wizardEyes);
  changeValue(currentColor, eyesInput);
});

fireballWrap.addEventListener('click', function() {
  var currentColor = chooseRandom(FIREBALL_COLOR);
  changeBackground(currentColor, fireballWrap);
  changeValue(currentColor, fireballInput);
});

