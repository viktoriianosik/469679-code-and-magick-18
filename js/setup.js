'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARDS_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var getName = function () {
  return WIZARDS_NAME[Math.floor(Math.random() * WIZARDS_NAME.length)];
};

var getSurname = function () {
  return WIZARDS_SURNAME[Math.floor(Math.random() * WIZARDS_SURNAME.length)];
};

var getCoatColor = function () {
  return WIZARDS_COAT_COLOR[Math.floor(Math.random() * WIZARDS_COAT_COLOR.length)];
};

var getEyesColor = function () {
  return WIZARDS_EYES_COLOR[Math.floor(Math.random() * WIZARDS_EYES_COLOR.length)];
};

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: getName() + getSurname(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
